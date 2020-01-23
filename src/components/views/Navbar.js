import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "../styles/Navbar.css";
function Navbar({ history }){

    let email = sessionStorage.getItem("email");

    const handleSignout = () => {
        sessionStorage.removeItem("byteME");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("id");
        history.push("/");
    };
    return (
	    <div className="header">
	    <div id="Byte-me">
	    <h1 className="company"><img id="logo" src="https://img.icons8.com/bubbles/100/000000/meal.png"/><b>BYTE ME</b></h1></div>
	    <div className="navbar">
            <Link to="/"><img id="house-icon" src="https://img.icons8.com/bubbles/50/000000/order-delivered.png" style={{height: '2em', marginTop: '-5%'}} alt="House-icon"/>Home</Link>
	    
            <div id="right-align">
	        <Link to="/acccountInfo">Account</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/" onClick={handleSignout}> Sign Out </Link>
            </div>
            </div>
	    </div>
    );
}
export default Navbar;
//Added link to Cart
