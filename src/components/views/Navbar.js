import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css";
class Navbar extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="navbar">
            <ul>
            <Link to ="/">
               <li className="home">Home</li>
            </Link>
            <Link to="/">
                <li className="account">
                    Account
                </li>
            </Link>
            <Link to ="/AccountInfo">
                <li className="account">
                    Cart
                </li>
            </Link>
            </ul>
            </div>
        );
    }
}

export default Navbar;
