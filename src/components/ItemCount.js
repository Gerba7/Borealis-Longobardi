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
            <h1 className="text-center mt-5">{count}</h1>
            <button className="btn count btn-danger" onClick={restar}>-</button>
            <button className="btn count btn-success" onClick={sumar}>+</button>
            <div>
            <button className="btn cartplus btn-primary" onClick={() => setCount(0)}>Agregar al carrito</button>
            </div>
            <p className="text-center">Apurate! solo quedan: {stock - count}</p>
        </div>
    );

}

export default ItemCount;