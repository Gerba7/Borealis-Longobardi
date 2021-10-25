import { CardGroup } from 'reactstrap';
import Item from './Item';


const ItemList = ({beers}) => {

    console.log(beers)

        return(
            
            <CardGroup className="cardgroup">
                 
                {beers.map(beer => <Item beer={beer} key={beer.id} />)}
                
            </CardGroup>         
                                                                
            
        )
        

    
}

export default ItemList;