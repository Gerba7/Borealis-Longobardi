import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { db } from '../services/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Spinner, Container, Row } from 'reactstrap';


const ItemListContainer = () => {

    
    const [listBeer, setListBeer] = useState([])


    useEffect(() => {
        getDocs(collection(db, 'Productos')).then((result) => {
            const listBeer = result.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            console.log(listBeer)
            setListBeer(listBeer)
        }).catch((error) => {
            console.log('Error searching products', error)
        }).finally()
    }, [])

    

    if(listBeer.length === 0) {
        return <div className="spinner">
                    <Spinner type="grow" color="light" />
                </div>
        
    }

    return(
        <Container>
            <Row>
                <ItemList beers={listBeer} />                    
            </Row>
        </Container>
    )

    
    
}




export default ItemListContainer;