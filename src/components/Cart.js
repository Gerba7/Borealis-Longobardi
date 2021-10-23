import { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../context/CartContext';
import CartDetail from './CartDetail';
import { Timestamp, collection, addDoc, getDoc, doc, writeBatch } from 'firebase/firestore';
import { db } from '../services/firebase';


const Cart = () => {

    const { products, totalQuantity, totalPrice, clear } = useContext(CartContext)
    const [total,setTotal] = useState()
    const [orderId, setOrderId] = useState()


    useEffect(() => {
        setTotal(totalPrice())
    }, [totalPrice])

    const confirmOrder = () => { /*currentUser ?*/

        const user = {
            name: 'Pepe',
            phone: 111-111111,
            email: 'pepe21@gmail.com'
        }

        const objOrder = {
            buyer: user,
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
            })
        } /* : */ 

    }


    return(
        <div>
        <h2 className="text-center">Empty Cart :(</h2>
        { totalQuantity() === 0 ? <NavLink to="/itemlist" activeClassName="navLink" className="Option"><button color="light">Add items to Cart</button></NavLink> :
        <div>
            <h1>Cart</h1>
            <div className="">
                {products.map(prod => <CartDetail prod={prod} key={prod.id} />)}
            </div>
            <div className="center">
                <button className="btn btn-danger" onClick={() => clear()}>Clear Cart</button>
                <NavLink to="/checkout"><button className="btn btn-success" onClick={() => confirmOrder()}>Confirm Order</button></NavLink>
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