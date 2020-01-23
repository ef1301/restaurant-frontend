import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "../styles/Navbar.css";
class Navbar extends Component{

    //let email = sessionStorage.getItem("email");

    handleSignout = () => {
        sessionStorage.removeItem("byteME");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("id");
        //history.push("/");
    };
    render() {
    return (
	    <div className="header">
	    <div id="Byte-me">
	    <h1 className="company"><img id="logo" src="https://img.icons8.com/bubbles/100/000000/meal.png"/><b>BYTE ME</b></h1></div>
	    <div className="navbar">
            <Link to="/"><img id="house-icon" src="https://img.icons8.com/bubbles/50/000000/order-delivered.png" style={{height: '2em', marginTop: '-5%'}} alt="House-icon"/>Home</Link>
	    
            <div id="right-align">
	        <Link to="/accountInfo">Account</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/" onClick={this.handleSignout}> Sign Out </Link>
            </div>
            </div>
	    </div>
    );
    }
}
export default Navbar;
//Added link to Cart
