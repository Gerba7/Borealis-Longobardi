import { useContext, useState, useEffect } from "react";
import UserContext from "../context/UserContext";
import { Timestamp, setDoc, getDoc, doc, updateDoc, arrayUnion, arrayRemove, collection } from 'firebase/firestore';
import { db } from '../services/firebase';
import Favorites from './Favorites';
import { Spinner } from 'reactstrap';





const FavoritesContainer = () => {


    const { favorites, currentUser } = useContext(UserContext)

    const [displayFavorites, setDisplayFavorites] = useState([])

    
    useEffect(() => {
        const favt = []
        if (currentUser) {        
        favorites.forEach(fav => {
        getDoc(doc(db, 'Productos', fav)).then(result => {
            favt.push({...result.data(), id: result.id})
            setDisplayFavorites(favt)
        })
    })
    } else {
        console.log('Empty Favorites')
    }   
    } , [])

    if(displayFavorites.length === 0) {
        return <div className="spinner">
                    <Spinner type="grow" color="light" />
                </div>
        
    }
    

    console.log(displayFavorites)


    return(

        <div>
            <Favorites favs={displayFavorites} />
        </div>
    );
}


export default FavoritesContainer;