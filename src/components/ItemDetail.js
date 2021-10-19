
import ItemCount from './ItemCount';

const ItemDetail = ({product}) => {

    
 

    return(
        
        <div className="container">
            <div className="beerCard">
                <img src={product.pictureUrl} alt={product.title} />
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