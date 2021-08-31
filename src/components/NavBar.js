import React from 'react'; 
import './NavBar.css';

const NavBar = () => {

    return(

            <div className="container">
                <div className="row">
                    <img id="logo" className="col-2 mt-4" src="" alt="Borealis Beer"/>
                    <div className="col-7">
                        <button className="btn btn-outline-light">About Us</button>
                        <button className="btn btn-outline-light">Styles</button>
                        <button className="btn btn-outline-light">Buy</button>
                        <button className="btn btn-outline-light">Contact Us</button>                    
                    </div>
                    <div className="col-3">
                        <button className="btn bg-white">Sign In</button>
                        <button className="btn bg-white">Sign Up</button>
                    </div>
                </div>
            </div>

    );
}

export default NavBar;




/*

class NavBar extends Component {

    render() {

        return (
            <div className="container mt-2">
                <div className="row">
                    <img id="logo" className="col-3" src="" alt="Borealis Beer"/>
                    <div className="col-6">
                        <button className="btn btn-outline-light">About Us</button>
                        <button className="btn btn-outline-light">Styles</button>
                        <button className="btn btn-outline-light">Buy</button>
                        <button className="btn btn-outline-light">Contact Us</button>                    
                    </div>
                    <div className="col-3">
                        <button className="btn bg-white">Sign In</button>
                        <button className="btn bg-white">Sign Up</button>
                    </div>
                </div>
            </div>
        );

    }
    
    
    
}



export default NavBar;
*/