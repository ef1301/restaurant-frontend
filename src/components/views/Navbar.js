import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "../styles/Navbar.css";
class Navbar extends Component{
    constructor(){
        super();
    }
    render(){
    return (
        <div className="navbar">
        <Link to="/">Home</Link>
        <p className="company"><b>BYTE ME</b></p>
        <div id="right-align">
            <Link to="/AccountInfo">Account</Link>
            <Link to="/Cart">Cart</Link>
            <Link to="/SignOut"> Sign Out </Link>
        </div>
        </div>
        );
    }
}

export default Navbar;
//Added link to Cart
