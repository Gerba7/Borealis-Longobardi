import { useState } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({details}) => {

    const [cart, setCart] = useState(0)
    console.log(cart)
 

    return(
        
        <div className="container">
            <div className="beerCard row col-12 justify-content-center">
                <img src={details.pictureUrl} alt={details.title} />
                <div>
                    <h5>{details.title}</h5>
                    <p>{details.description}</p>
                    <h6>{details.price}</h6> 
                </div>
                <ItemCount setCart={setCart} cart={cart} stock={details.stock} initial="0"/>
            </div>
        </div>
    )

}

export default ItemDetail;