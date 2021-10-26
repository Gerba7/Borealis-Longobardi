import { useEffect, useState, createContext} from 'react';
import { auth } from '../services/firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Timestamp, setDoc, getDoc, doc, updateDoc, arrayUnion, arrayRemove, onSnapshot } from 'firebase/firestore';
import { db } from '../services/firebase';

const UserContext = createContext()

export const UserContextProvider = ({children}) => {

    const [currentUser,setCurrentUser] = useState(undefined)
    const [favorites,setFavorites] = useState([])
    const [orderId, setOrderId] = useState(undefined)

    
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
            getDoc(doc(db, 'Users', user.uid)).then((result) => {
                setFavorites(result.data().favorites)})
            onSnapshot(doc(db, 'Users', user.uid), (doc) => {
                setFavorites(doc.data().favorites)})    
        } else {
            setCurrentUser(null)
            console.log('Not Logged In')
        }
    })
    }, [])

    const addToFavorites = (item) => {
        if(currentUser) {
            updateDoc(doc(db, 'Users', currentUser.id), { favorites: arrayUnion(item.id)})
            console.log(item.id + 'Item Added')  
        } else {
            console.log('You must be logged in')
        }
    }

    const removeFavs = (id) => {
        if(currentUser && favorites) {
            updateDoc(doc(db, 'Users', currentUser.id), { favorites: arrayRemove(id)})  
            console.log(id + 'Item Removed')
        } else {
            console.log('You must be logged in')
        }
     }

    const isInFavs = (id) => {
        if(favorites) {
            return favorites.some(fav => fav === id)
        }
    }

    const newOrder = (order) => {
        setOrderId(order)
    } 

    
    return(
        <UserContext.Provider value={{currentUser, signUp, logIn, logOut, addToFavorites, removeFavs, favorites, newOrder, orderId, isInFavs}}>
            {children}
        </UserContext.Provider>
        
    )
}

export default UserContext;