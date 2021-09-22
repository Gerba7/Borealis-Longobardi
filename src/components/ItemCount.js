import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ItemCount = ({stock, initial, setCart, cart}) => {

    
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
        if(count >= stock) {
            console.log("maximo");
        } else {
            setCount(count + 1)
        }
    }

    const addToCart = () => {
        setCart(count)
        setCount(0) 
        setButton(false)   
    }

 
    return(
        <div className="container">
            <h5 className="text-center mt-1">{count}</h5>
            <button className="btn count btn-danger" onClick={restar}>-</button>
            <button className="btn count btn-success" onClick={sumar}>+</button>
            { button ? <button className="btn cartplus btn-primary" onClick={() => addToCart()}>Add to cart</button> :
                <NavLink to="/cart"><button className="btn cartplus btn-secondary">Go to cart</button></NavLink> }
            <p className="stock text-center">Apurate! Solo quedan: {stock-count-cart}</p>
        </div>
    );

}

export default ItemCount;