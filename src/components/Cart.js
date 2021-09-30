
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import CartDetail from './CartDetail';

const Cart = () => {

    const { products } = useContext(CartContext)

    return(
        <div>
            <h1>Cart</h1>
            <div className="">
                {products.map(prod => <CartDetail prod={prod} key={prod.id} />)}
            </div>
            
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