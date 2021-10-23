import ItemCount from './ItemCount';
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import { Button } from 'reactstrap';



const ItemDetail = ({product}) => {

    const { addToFavorites } = useContext(UserContext)

    
 
    return(
        
        <div className="container">
            <div className="beerCard">
                <img src={product.pictureUrl} alt={product.title} />
                <Button onClick={addToFavorites(product)}>Fav</Button>
                <div>
                    <h5>{product.title}</h5>
                    <p>{product.description}</p>
                    <h6>${product.price}</h6> 
                </div>
                <ItemCount product={product} stock={product.stock} initial="0"/>               
            </div>
        </div>
    )

}

export default ItemDetail;