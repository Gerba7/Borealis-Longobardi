




const Item = ({beer}) => {

    return(

        <div className="beerCard">
            <img src={beer.pictureUrl} alt={beer.title} />
            <div>
                <h5>{beer.title}</h5>
                <button className="btn btn-dark">Ver detalle</button>
            </div>
        </div>
        
    );
    

}


export default Item;