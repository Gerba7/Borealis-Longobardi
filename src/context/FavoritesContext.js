import { useEffect, useState, createContext} from 'react';


const FavoritesContext = createContext()

export const FavoritesContextProvider = ({children}) => {

    const [favorites,setFavorites] = useState()
   
    
    
    

    return(
        <FavoritesContext.Provider value={{}}>
            {children}
        </FavoritesContext.Provider>
        
    )
}

export default FavoritesContext;