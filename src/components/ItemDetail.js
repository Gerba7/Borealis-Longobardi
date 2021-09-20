import ItemCount from './ItemCount';

const ItemDetail = ({details}) => {

    if(!details) {
        return(
            <h1>Loading . . .</h1>
        )
    }

    return(
        
        <div className="beerCard">
            <img src={details.pictureUrl} alt={details.title} />
            <div>
                <h5>{details.title}</h5>
                <p>{details.description}</p>
                <h6>{details.price}</h6> 
            </div>
            <ItemCount stock={details.stock} initial="0"/>
        </div>
    )

}

export default ItemDetail;