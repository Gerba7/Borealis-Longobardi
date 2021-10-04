import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../context/CartContext';


const CartDetail = ({prod}) => {

    const { removeItem } = useContext(CartContext)

    return(
        <div>
            <div className="container cartitem" id="cartitem">
                <div className="row">
                    <div className="col-3">
                        <img className="cartimg" src={prod.pictureUrl} alt={prod.title} />
                    </div>
                    <div className="col-5">
                        <h3>{prod.title}</h3>
                        <p>{prod.description}</p>
                    </div>
                    <div className="col-2">
                        {prod.quantity}
                    </div>
                    <div className="col-2">
                    <button onClick={() => removeItem(prod.id)}><FontAwesomeIcon color="black" icon={faTimesCircle} size="lg"></FontAwesomeIcon></button>
                    </div>
                </div>                                           
            </div>
            
        </div>    
            
            
    )


}

export default CartDetail;