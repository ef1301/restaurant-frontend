import React, { Component } from 'react';
import '../styles/Cart.css'
import Navbar from './Navbar';
class Cart extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        
    }
    render() {
        return(
            <div>
                <Navbar />
            </div>
        );
    }
} 


export default Cart;