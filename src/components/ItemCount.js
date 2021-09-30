import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../context/CartContext';


const ItemCount = ({stock, initial, setCart, product}) => {

    const { addItem, restoStock } = useContext(CartContext)
    const [count, setCount] = useState(parseInt(initial));
    const [button, setButton] = useState(true)
    

    const restar = () => {
        if(count <= 0) {
            console.log("minimo");
        } else {
            setCount(count - 1);
        }
    }

    const sumar = () => {
        if(count >= stock-restoStock()) {
            console.log("maximo");
        } else {
            setCount(count + 1)
        }
    }

    const addToCart = () => {
        setCart(count)
        setCount(0) 
        setButton(false)
        addItem(product,count) 
    }

    const remaining = stock-count-restoStock()
 
 
    return(
        <div className="container">
            <h5 className="text-center mt-1">{count}</h5>
            <button className="btn count btn-danger" onClick={restar}>-</button>
            <button className="btn count btn-success" onClick={sumar}>+</button>
            { button ? <button className="btn cartplus btn-primary" onClick={() => addToCart()}>Add to cart</button> :
                <NavLink to="/cart"><button className="btn cartplus btn-secondary">Go to cart</button></NavLink> }
            { remaining <= 0 ? <p className="nstock text-center">AGOTADO!</p>:
            <p className="stock text-center">Apurate! Solo quedan: {remaining}</p>}
        </div>
    );

}

export default ItemCount;