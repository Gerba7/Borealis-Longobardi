import React, { useState } from 'react'; 
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Button } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import CartWigdet from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faStar } from '@fortawesome/free-solid-svg-icons';
import LoginModal from './LoginModal';



const NavBar = () => {

    const [isOpen,setIsOpen] = useState(false);
    

    const toggle = () => setIsOpen(!isOpen)

    

    return(
        <div className="container">
            <div className="row">
                    <Navbar expand="lg">
                            <NavbarToggler onClick={toggle} icon={faList}>
                                <FontAwesomeIcon className="toggle" color="white" icon={faList} size="lg" />
                            </NavbarToggler>
                            <NavbarBrand>
                                <Link to="/"> 
                                    <img id="logo" alt="Aca va a ir el Logo"/>
                                </Link>
                            </NavbarBrand>
                            <Collapse className="justify-content-center" isOpen={isOpen} navbar> 
                                <Nav navbar>  
                                    <NavLink to="/aboutus" className="Option"><Button outline color="light">About Us</Button></NavLink>
                                    <NavLink to="/styles" className="Option"><Button outline color="light">Styles</Button></NavLink>
                                    <NavLink to="/itemlist" className="Option"><Button outline color="light">Buy</Button></NavLink>
                                    <NavLink to="/contactus" className="Option"><Button outline color="light">Contact Us</Button></NavLink>                        
                                </Nav>
                            </Collapse>
                            <LoginModal />
                            <NavLink to="/favorites" className="favswidget"><FontAwesomeIcon className="toggle" color="white" icon={faStar} size="lg" /></NavLink>
                            <NavLink to="/cart" className="cartwidgetm"><CartWigdet /></NavLink>                                                
                    </Navbar>
            </div>
        </div>
         
    );
}

export default NavBar;



/*
const NavBar = () => {

    return(
        <Navbar expand="md">
            <div className="container mt-2">
                <NavbarToggler onClick=""  />
                <NavbarBrand className="mr-auto" href="/">
                    <img id="logo" src="" alt="Borealis Beer"/>
                </NavbarBrand> 
                    <Nav navbar>
                        <Button outline color="light">About Us</Button>
                        <Button outline color="light">Styles</Button>
                        <Button outline color="light">Buy</Button>
                        <Button outline color="light">Contact</Button>
                    </Nav>
                <CartWigdet />                 
            </div>
        </Navbar>
    );
}

export default NavBar;

*/



/*

const NavBar = () => {

    return(

            <div className="container mt-2">
                <div className="row">
                    <img id="logo" className="col-2" src="" alt="Borealis Beer"/>
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

*/


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