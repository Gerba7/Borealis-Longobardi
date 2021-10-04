import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../context/CartContext';
import CartDetail from './CartDetail';

const Cart = () => {

    const { products, totalQuantity, totalPrice, clear } = useContext(CartContext)

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
            </div>
            <div className="center">
                <h3>Total: ${totalPrice()}</h3>
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