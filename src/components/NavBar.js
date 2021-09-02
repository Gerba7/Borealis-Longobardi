import React, { useState } from 'react'; 
import './NavBar.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Button } from 'reactstrap';
import CartWigdet from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';



const NavBar = () => {

    const [isOpen,setIsOpen] = useState (false);
    

    const toggle = () => setIsOpen(!isOpen);

    return(
        <Navbar expand="md">
            <div className="container mt-2">
                <NavbarToggler onClick={toggle} icon={faList}>
                    <FontAwesomeIcon color="white" icon={faList} size="lg" />
                </NavbarToggler>
                <NavbarBrand className="mr-auto" href="/">
                    <img id="logo" src="" alt="Borealis Beer"/>
                </NavbarBrand>
                <Collapse className="justify-content-center" isOpen={isOpen} navbar> 
                    <Nav navbar>
                        <Button outline color="light">About Us</Button>
                        <Button outline color="light">Styles</Button>
                        <Button outline color="light">Buy</Button>
                        <Button outline color="light">Contact</Button>
                    </Nav>
                </Collapse>
                <CartWigdet />                
            </div>
            
        </Navbar>
         
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