import { useContext } from 'react';
import UserContext from '../context/CartContext';


const FavoritesDetail = ({favs}) => {

    const { removeFavs } = useContext(UserContext)

    return(
        <div>
            <div className="container cartitem" id="cartitem">
                <div className="row">
                    <div className="col-3">
                        <img className="cartimg" src={favs.pictureUrl} alt={favs.title} />
                    </div>
                    <div className="col-5">
                        <h3>{favs.title}</h3>
                        <p>{favs.description}</p>
                    </div>
                    <div className="col-2">
                        {favs.quantity}
                    </div>
                    <div className="col-2">
                    <button onClick={() => removeFavs(favs.id)}><FontAwesomeIcon color="black" icon={faTimesCircle} size="lg"></FontAwesomeIcon></button>
                    </div>
                </div>                                           
            </div>
            
        </div>    
            
            
    )


}

export default FavoritesDetail;