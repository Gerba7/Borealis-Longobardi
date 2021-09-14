import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import ItemCount from './ItemCount';




const Item = ({beer}) => {

    return(

        <div className="beerCard">
            <img src="" alt={beer.title} />
            <div>
                <h5>{beer.title}</h5>
                <p>{beer.description}</p>
                <h6>{beer.price}</h6> 
            </div>
            <ItemCount stock="25" initial="0"/>
        </div>
        
        
        
        
        
        
        
        /*<div>
        <Card>
            <CardImg src={beer?.pictureUrl} alt={beer?.title} />
            <CardBody>
                <CardTitle tag="h4">{beer?.title}</CardTitle>
                <CardText>{beer?.description}</CardText>
                
            </CardBody>
        </Card>
        </div>*/
        

    );
    

}


export default Item;