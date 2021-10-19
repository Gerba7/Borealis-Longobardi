import { useEffect } from 'react';
import { db } from '../services/firebase';
import { collection, getDocs } from 'firebase/firestore';

const Checkout = () => {


    /*const [checkout,setCheckout] = useState(undefined)*/

    /*useEffect(() => {
        getDoc(doc(db, 'Orders', id)).then((result) => {
            const checkout = { id: result.id, ...result.data()}
            setCheckout(checkout)
        }).catch((error) => {
            console.log('Error searching products', error)
        }).finally()
        return(() => {
            setCheckout(undefined)
        })
    }, [id])*/


    return(

        <div>
            <h1>Checkout</h1>
            

        </div>
    );
}


export default Checkout;