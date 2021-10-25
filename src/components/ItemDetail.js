import ItemCount from './ItemCount';
import { useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import { Card, CardImg, CardText, CardBody, CardTitle, CardImgOverlay } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';



const ItemDetail = ({product}) => {

    const { addToFavorites, removeFavs, favorites } = useContext(UserContext)

    
    console.log(favorites)

    
    const isInFavs = (id) => {
        if(favorites) {
            return favorites.some(fav => fav === id)
        }
    }

    const thisOnClickAdd = (event) => {
        event.preventDefault()
        event.stopPropagation()
        addToFavorites(product)
    }

    const thisOnClickRem = (event) => {
        event.preventDefault()
        event.stopPropagation()
        removeFavs(product.id)
    }

    console.log(isInFavs(product.id))
 
    return(
        

        <Card className="listCard">
            <CardImg className="cardimg" top width="100%" src={product.pictureUrl} alt={product.title} />
            <CardImgOverlay className="overlayBtn">
                { isInFavs ?  <div><button className="favbtntrue" onClick={thisOnClickRem}><FontAwesomeIcon className="toggle" color="yellow" icon={faStar} size="lg" /></button></div>
                : <div><button className="favbtn" onClick={thisOnClickAdd}><FontAwesomeIcon className="toggle" color="white" icon={faStar} size="lg" /></button></div> }
            </CardImgOverlay>
            <CardBody>                
                <CardTitle tag="h5">{product.title} ${product.price}</CardTitle>
                <CardText>{product.description}</CardText>
                <ItemCount product={product} stock={product.stock} initial="0"/>
            </CardBody>
        </Card>

    )

    

}

export default ItemDetail;