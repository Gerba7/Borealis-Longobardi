import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import CartContext from '../context/CartContext';


const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return(
        
        <div>
        { totalQuantity() === 0 ? <div></div> :
        <a className="cartwidget" href="">
        <div><FontAwesomeIcon color="white" icon={faCartPlus} size="lg" /></div>
        <div className="cartnum">{totalQuantity()}</div>
        </a>}
        </div>
        
    );
}

export default CartWidget;