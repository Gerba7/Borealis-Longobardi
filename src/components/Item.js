import { Link } from "react-router-dom";





const Item = ({beer}) => {

    return(

        <div className="beerCard">
            <img src={beer.pictureUrl} alt={beer.title} />
            <div>
                <h5>{beer.title}</h5>
                <Link key={beer.id} to={`/itemlist/${beer.id}`} activeClassName="navLink" className="Option"><button className="btn btn-dark">Ver detalle</button></Link>
            </div>
        </div>
        
    );
    

}


export default Item;