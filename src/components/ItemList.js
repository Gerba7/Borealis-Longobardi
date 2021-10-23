import Item from './Item';


const ItemList = ({beers}) => {

    console.log(beers)

        return(
            <div>
                {beers.map(beer => <Item beer={beer} key={beer.id} />)}
            </div>    
            
        )
        

    
}

export default ItemList;