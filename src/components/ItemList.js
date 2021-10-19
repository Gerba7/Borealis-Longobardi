import Item from './Item';


const ItemList = ({beers}) => {


        return(
            <div className="container">
                {beers.map(beer => <Item beer={beer} key={beer.id} />)}
            </div>    
            
        )
        

    
}

export default ItemList;