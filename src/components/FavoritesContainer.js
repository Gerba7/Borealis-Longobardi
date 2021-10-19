import { useContext } from "react";
import UserContext from "../context/UserContext";




const FavoritesContainer = () => {

    const { favorites } = useContext(UserContext)


    return(

        <div>
            <h1>Favorites</h1>
            <div className="">
                {favorites.map(favs => <CartDetail favs={favs} key={favs.id} />)}
            </div>
           

        </div>
    );
}


export default FavoritesContainer;