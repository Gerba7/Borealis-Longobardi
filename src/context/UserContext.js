import { useEffect, useState, createContext} from 'react';
import { auth } from '../services/firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Timestamp, collection, setDoc, getDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebase';

const UserContext = createContext()

export const UserContextProvider = ({children}) => {

    const [currentUser,setCurrentUser] = useState(undefined)
    const [favorites,setFavorites] = useState([])

    
    const signUp = (email, password, name, surname, phone) => {

        const userInfo = {
            userName: name,
            userSurname: surname,
            userPhone: phone,
            userDateCreation: Timestamp.fromDate(new Date()),
            userEmail: email,
        }

        return createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            setDoc(doc(db, 'Users', cred.user.uid), userInfo)
        })
    }


    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        

    }

    const logOut = () => {
        signOut(auth)
        console.log('Log Out')
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
        if (user) {
            getDoc(doc(db, 'Users', user.uid)).then((result) => {
                const userInfo = { id: result.id, ...result.data()}
                setCurrentUser(userInfo)})
        } else {
            setCurrentUser(null)
            console.log('Not Logged In')
        }
    })
    }, [])

    const addToFavorites = (item) => {
        if(currentUser) {
            const favs = []
            updateDoc(doc(db, 'Users', currentUser.id), { favorites: [...favs, item.id]})    
        } else {
            console.log('You must be logged in')
        }
    }

    const clearFavs = () => {
        setFavorites([])
    }

    const isInFavs = (id) => {
       return favorites.some(fav => fav.id === id)
    }

    const removeFavs = (id) => {
       const newFavs = favorites.filter(fav => favorites.id !== id)
       setFavorites(newFavs)
    }

   

    return(
        <UserContext.Provider value={{currentUser, signUp, logIn, logOut, addToFavorites}}>
            {children}
        </UserContext.Provider>
        
    )
}

export default UserContext;