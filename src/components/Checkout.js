
import { NavLink, Button } from 'reactstrap';


const Checkout = () => {

    /*const [checkout, setCheckout] = useState(undefined)


    const { orderId } = useContext(UserContext)

    useEffect(() => {
        getDoc(doc(db, 'Orders', orderId)).then((result) => {
            const checkout = { id: result.id, ...result.data()}
            setCheckout(checkout)
        }).catch((error) => {
            console.log('Error searching products', error)
        }).finally()
        return(() => {
            setCheckout(undefined)
        })
    }, [])*/


    return(

        <div>
            <h1>Checkout</h1>

            <h1>Thank You for your purchase! :)</h1>

            <NavLink to="/"><Button>Return Home</Button></NavLink>
                    

        </div>
    );
}


export default Checkout;