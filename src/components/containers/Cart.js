import React, { Component } from 'react';
import Navbar from '../views/Navbar';
import Footer from '../views/Footer';
import '../styles/Cart.css';
import CartList from '../views/CartList.jsx';
import { Link } from 'react-router-dom';
import { fetchCartThunk, addItemThunk } from "../../thunks";
import { connect } from 'react-redux'

class Cart extends Component {
    componentDidMount() {
	this.props.fetchCart();
    }

    currentItem = (id) => {
	return this.props.menu.find( (key) => key.id === Number(id))
    }
    
    itemRender = () => {
	if(Object.keys(this.props.cart).length === 0) {
            return <p> Your cart is empty </p>
	}
	else {
	    return Object.keys(this.props.cart).map( (key) => {
		return (<CartList key={key} item={this.currentItem(key)} cart={this.props.cart} identifier={key}/>);
	    })
	}
    }

    render() {
	return (
		<div>
		<Navbar />
		<div className="cart">
		
		<h1>CART</h1>
		<Link to="/Checkout" id="checkout-button">Proceed to checkout</Link>
		<div className="cart-items">
		{this.itemRender()}
	    </div>
		</div>

		<Footer />
		</div>
		
	);
    }
} 

function mapState(state) {
    return {
	menu: state.menu,
	cart: state.cart
    }
}

function mapDispatch(dispatch) {
    return {
        fetchCart: () => dispatch(fetchCartThunk())
    }
}

export default connect(mapState, mapDispatch)(Cart);
