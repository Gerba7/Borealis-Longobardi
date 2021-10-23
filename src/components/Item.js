import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from "react-router-dom";



const Item = ({beer}) => {

    

    return(
        /*<div className="container">
            <div className="row">
                <div className="col">
                    <div className="beerCard">
                        <img src={beer.pictureUrl} alt={beer.title} />
                        <div> 
                            <h5>{beer.title}</h5>
                            <Link key={beer.id} to={`/itemlist/${beer.id}`} activeClassName="navLink" className="Option"><button className="btn cartplus btn-dark">Buy</button></Link>
                        </div>
                    </div>
                </div>    
            </div>
        </div>*/

        <div>
            <Card>
                <CardImg className="cardimg" top width="100%" src={beer.pictureUrl} alt={beer.title} />
                <CardBody>
                    <CardTitle tag="h5">{beer.title}</CardTitle>
                    <CardText>{beer.description}</CardText>
                    <Link key={beer.id} to={`/itemlist/${beer.id}`} activeClassName="navLink" className="Option"><Button className="btn cartplus btn-dark">Buy</Button></Link>
                </CardBody>
            </Card>
        </div>
        
    );
    

}


export default Item;