import { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../context/CartContext';
import CartDetail from './CartDetail';
import { Timestamp, collection, addDoc, getDoc, doc, writeBatch } from 'firebase/firestore';
import { db } from '../services/firebase';
import UserContext from '../context/UserContext';
import LoginModal from './LoginModal';
import { Alert } from 'reactstrap'


const Cart = () => {

    const { products, totalQuantity, totalPrice, clear } = useContext(CartContext)
    const [total,setTotal] = useState()
    const [error, setError] = useState('') 
    const { currentUser } = useContext(UserContext)


    useEffect(() => {
        setTotal(totalPrice())
    }, [totalPrice])

    const confirmOrder = () => { 

        if(currentUser) {

        const objOrder = {
            buyer: currentUser,
            items: products,
            total: total,
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)
        const outOfStock = []

        objOrder.items.forEach((prod, i) => {
            getDoc(doc(db, 'Productos', prod.id)).then(result => {
                if(result.data().stock >= objOrder.items[i].quantity) {
                    batch.update(doc(db, 'Productos', result.id), {
                        stock: result.data().stock - objOrder.items[i].quantity
                    })
                } else {
                    outOfStock.push({...result.data(), id: result.id})
                }
            })
        })

        if(outOfStock.length === 0) {
            addDoc(collection(db, 'Orders'), objOrder).then(() => {
                batch.commit()
            }).finally(() => {
                setTotal(0)
                clear()
                console.log('success')
                setError('')
            })
        }

        } else {
            setError('You must be loged In')
            
        }

    }


    return(
        <div>
        
        {error && <Alert>{error}</Alert>}
        { totalQuantity() === 0 ? 
        
        <div>
            <h2 className="text-center">Empty Cart :(</h2>
            <NavLink to="/itemlist" activeClassName="navLink" className="Option"><button color="light">Add items to Cart</button></NavLink>
        </div> :

        <div>
            <h1>Cart</h1>
            <div className="">
                {products.map(prod => <CartDetail prod={prod} key={prod.id} />)}
            </div>
            <div className="center">
                <button className="btn btn-danger" onClick={() => clear()}>Clear Cart</button>                
                { currentUser ? <button className="btn btn-success" onClick={() => confirmOrder()}>Confirm Order</button> : 
                <button className="btn btn-success" disabled onClick={() => confirmOrder()}>Confirm Order</button>
                }
                <LoginModal />
            </div>
            <div className="center">
                <h3>Total: ${total}</h3>
            </div>            
        </div>
        }
        </div>        
    );
}


export default Cart;







            /*<Media>
                <Media left>
                    <Media object data-src={newProduct.pictureUrl} alt={newProduct.title} />
                </Media>
                <Media body>
                    <Media heading>
                        {newProduct.title}
                    </Media>
                    {newProduct.description}
                </Media>
                <Media right>
                    {newProduct.quantity}
                </Media>
            </Media>*/