import React, { Component } from 'react';
import Navbar from './Navbar';

class Landing extends Component{
    constructor(){
        super();
    }
    render(){
        <div className="wrapper">
            <Navbar />
            <div className="option">
                <Link to="/">
                <button type="submit" className="sign-up"></button>
                </Link>
                <Link to="/">
                <button type="submit" className="log-in"></button>
                </Link>
            </div>
        </div>
    }
}

export default Landing;