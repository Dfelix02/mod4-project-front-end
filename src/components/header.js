import React from 'react';
import ShoppingCart from '../svg/shopping-cart-solid.svg';
import {Link} from "react-router-dom";
import '../css/header.css';




class Header extends React.Component {
    state = { 
    }
    
    render() { 
        return ( 
            <nav className="navBar">
                <h2 className="logo">GameShop</h2>
                <Link to="/" href="#" class="active">Home</Link>
                <Link to="/loginForms" href="#">Login / Register</Link>
                <Link to="/cart"><img alt=""className="cart" src={ShoppingCart} atl=""></img></Link>
            </nav>
            
        
        );
    }
}

export default Header;