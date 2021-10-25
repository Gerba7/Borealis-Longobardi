import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { db } from '../services/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Container, Row, Col } from 'reactstrap';
 


    const ItemDetailContainer = () => {

        const { id } = useParams();
        const [itemDetail, setItemDetail] = useState(undefined)
         

        useEffect(() => {
            getDoc(doc(db, 'Productos', id)).then((result) => {
                const itemDetail = { id: result.id, ...result.data()}
                setItemDetail(itemDetail)
            }).catch((error) => {
                console.log('Error searching products', error)
            }).finally()
            return(() => {
                setItemDetail(undefined)
            })
        }, [id])

        

        return(
            <Container>
                <Row>
                    <Col xs="12" sm="8" md="6" lg="4">
                        { itemDetail ? <ItemDetail product={itemDetail} /> : <h1>Loading . . .</h1> }
                    </Col>
                </Row>
            </Container>
        )
            
            

    }

    export default ItemDetailContainer;