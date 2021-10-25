


const FavoritesDetail = ({fav}) => {
    
    


    return(
        <div>
            <div className="container cartitem" id="cartitem">
                <div className="row">
                    <div className="col-3">
                        <img className="cartimg" src={fav.pictureUrl} alt={fav.title} />
                    </div>
                    <div className="col-5">
                        <h3 style={{ textAlign: "center"}}>{fav.title}</h3>
                        <p>{fav.description}</p>
                    </div>
                </div>                                           
            </div>           
        </div>             
    )


}

export default FavoritesDetail;