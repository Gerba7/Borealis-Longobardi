import { useContext } from "react";
import UserContext from "../context/UserContext";


const Home = (props) => {

    


    const { currentUser } = useContext(UserContext)

    return(
        <div>
            <h1>Home</h1>
            <div className="container">
            <h1 className="mt-5 text-center" id="greeting">Hello</h1>
            { currentUser ? <h1 className="mt-5 text-center" id="greeting2">{currentUser.userName}!</h1> :
            <h1 className="mt-5 text-center" id="greeting2">Stranger!</h1> }
            </div>

        </div>        
    );
}


export default Home;