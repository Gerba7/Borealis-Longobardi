import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {

    return(
        <a href="">
            <FontAwesomeIcon color="white" icon={faCartPlus} size="lg" />
        </a>
    );
}

export default CartWidget;