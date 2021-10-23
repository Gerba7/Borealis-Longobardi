import FavoritesDetail from './FavoritesDetail';




const Favorites = ({favs}) => {


    return(

        <div className="container">
            {favs.map((fav) => <FavoritesDetail fav={fav} key={fav.id} />)}
        </div>
    );
}


export default Favorites;