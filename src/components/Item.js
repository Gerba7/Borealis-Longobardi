import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { Link } from "react-router-dom";



const Item = ({beer}) => {



    return(
                 
            <Card className="listCard">
                <CardImg className="cardimg" top width="100%" src={beer.pictureUrl} alt={beer.title} />
                <CardBody>
                    <CardTitle tag="h5">{beer.title}</CardTitle>
                    <CardText>{beer.description}</CardText>
                    <Link key={beer.id} to={`/itemlist/${beer.id}`} activeClassName="navLink" className="Option"><Button className="btn cartplus btn-dark">Buy</Button></Link>
                </CardBody>
            </Card>        
        
    );
    

}


export default Item;