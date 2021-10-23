import { useContext } from 'react';
import UserContext from '../context/CartContext';


const FavoritesDetail = ({fav}) => {

    const { removeFavs, favorites } = useContext(UserContext)

    


    return(
        <div>
            <div className="container cartitem" id="cartitem">
                <div className="row">
                    <div className="col-3">
                        <img className="cartimg" src={fav.pictureUrl} alt={fav.title} />
                    </div>
                    <div className="col-5">
                        <h3>{fav.title}</h3>
                        <p>{fav.description}</p>
                    </div>
                    <div className="col-4">
                    <button >Rem fav</button>
                    </div>
                </div>                                           
            </div>           
        </div>             
    )


}

export default FavoritesDetail;