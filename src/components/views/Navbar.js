import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "../styles/Navbar.css";
class Navbar extends Component{
    constructor(){
        super();
    }
    render(){
        return(
		<div className="navbar">
		<Link to ="/">Home</Link>

		<div id="right-align">
		<Link to="/AccountInfo">Account</Link>
		<Link to ="/">Cart</Link>
		</div>
            </div>
        );
    }
}

export default Navbar;
