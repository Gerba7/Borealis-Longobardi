import { useState } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({product}) => {

    const [cart, setCart] = useState(0)
    
 

    return(
        
        <div className="container">
            <div className="beerCard row col-12 justify-content-center">
                <img src={product.pictureUrl} alt={product.title} />
                <div>
                    <h5>{product.title}</h5>
                    <p>{product.description}</p>
                    <h6>{product.price}</h6> 
                </div>
                <ItemCount product={product} setCart={setCart} cart={cart} stock={product.stock} initial="0"/>
            </div>
        </div>
    )

}

export default ItemDetail;