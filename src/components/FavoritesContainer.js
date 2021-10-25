import { useContext, useState, useEffect } from "react";
import UserContext from "../context/UserContext";
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebase';
import Favorites from './Favorites';
import { Spinner } from 'reactstrap';





const FavoritesContainer = () => {


    const { favorites, currentUser } = useContext(UserContext)

    const [displayFavorites, setDisplayFavorites] = useState([])

    
    useEffect(() => {
        const favt = []
        if (currentUser && favorites) {        
        Promise.all(favorites.map(fav => {
            return new Promise((resolve,reject) => {
                getDoc(doc(db, 'Productos', fav)).then(result => {
                    const product = {...result.data(), id: result.id}
                    resolve(product)
                })
            })
            
    })).then(result => setDisplayFavorites(result))
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