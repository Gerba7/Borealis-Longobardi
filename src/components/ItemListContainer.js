import ItemCount from './ItemCount'; 

const ItemListContainer = (props) => {
    return(
        <div className="container">
            <h1 className="mt-5 text-center" id="greeting">Hello</h1>
            <h1 className="mt-5 text-center" id="greeting2">{props.name}!</h1>
            <ItemCount stock="25" initial="0" />
        </div>        
    );
    
}




export default ItemListContainer;