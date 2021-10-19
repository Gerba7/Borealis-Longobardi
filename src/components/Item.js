import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import UserContext from "../context/UserContext";





const Item = ({beer}) => {

    const { addToFavorites } = useContext(UserContext)

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="beerCard">
                        <img src={beer.pictureUrl} alt={beer.title} />
                        <Button onClick={addToFavorites(beer)}>Fav</Button>
                        <div> 
                            <h5>{beer.title}</h5>
                            <Link key={beer.id} to={`/itemlist/${beer.id}`} activeClassName="navLink" className="Option"><button className="btn cartplus btn-dark">Buy</button></Link>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
        
    );
    

}


export default Item;