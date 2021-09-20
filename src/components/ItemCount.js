import { useState } from 'react';

const ItemCount = ({stock, initial}) => {

    
    const [count, setCount] = useState(parseInt(initial));

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

    return(
        <div className="container">
            <h5 className="text-center mt-1">{count}</h5>
            <button className="btn count btn-danger" onClick={restar}>-</button>
            <button className="btn count btn-success" onClick={sumar}>+</button>
            <button className="btn cartplus btn-primary" onClick={() => setCount(0)}>Agregar al carrito</button>
            <p className="stock text-center">Apurate! Solo quedan: {stock - count}</p>
        </div>
    );

}

export default ItemCount;