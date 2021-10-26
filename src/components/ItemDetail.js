import ItemCount from './ItemCount';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';
import { Card, CardImg, CardText, CardBody, CardTitle, CardImgOverlay } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Timestamp, setDoc, getDoc, doc, updateDoc, arrayUnion, arrayRemove, onSnapshot } from 'firebase/firestore';
import { db } from '../services/firebase';



const ItemDetail = ({product}) => {

    const { addToFavorites, removeFavs, isInFavs, favorites, currentUser } = useContext(UserContext)

    /*useEffect(() => {
        const unsub = onSnapshot(doc(db, 'Users', currentUser.id), (doc) => {
            console.log("Current data: ", doc.data().favorites)
        })
    }, [])*/
    
 

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

    console.log(favorites)
 
    return(
        

        <Card className="listCard">
            <CardImg className="cardimg" top width="100%" src={product.pictureUrl} alt={product.title} />
            <CardImgOverlay className="overlayBtn">
                { isInFavs(product.id) ?  <div><button className="favbtntrue" onClick={thisOnClickRem}><FontAwesomeIcon className="toggle" color="yellow" icon={faStar} size="lg" /></button></div>
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