//SAVE THIS AS A BACK UP JUST IN CASE THE BOOTSTRAP FORM IS NOT WORKING

import React, { Component } from 'react';
import Navbar from './Navbar';

class Landing extends Component{
    constructor(){
        super();
    }
    render(){
        return(
        <div className="wrapper">
            <Navbar />
            <div className="header">
                <h1>Welcome to Byte Me</h1>
            </div>
            <div className="option">
                <Link to="/">
                    <button type="submit" className="sign-up">Sign Up</button>
                </Link>
                <Link to="/">
                    <button type="submit" className="log-in">Log In</button>
                </Link>
            </div>
        </div>
        ); 
    }
}

export default Landing;
