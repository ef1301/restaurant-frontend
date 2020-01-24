import React, { Component } from 'react';
import Navbar from '../views/Navbar';
import Footer from '../views/Footer';
import '../styles/Cart.css';
import CartList from '../views/CartList.jsx';
import { Link } from 'react-router-dom';
import { fetchCartThunk, addQuantityThunk, subQuantityThunk, removeFromCartThunk } from "../../thunks";
import { connect } from 'react-redux'

class Cart extends Component {
    componentDidMount() {
	this.props.fetchCart();
    }

    increment = (id) => {
	this.props.addQuantity(id);
    }

    decrement = (id) => {
	this.props.subQuantity(id);
    }

    removeItem = (id) => {
	this.props.removeFromCart(id);
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
		if(this.props.cart[key] === 0) {
		    this.props.removeFromCart(key);
		}
		else { return <CartList key={key} item={this.currentItem(key)} cart={this.props.cart} identifier={key} increment={this.increment} decrement={this.decrement} remove={this.removeItem}/>;}
	    })}
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
        fetchCart: (cart) => dispatch(fetchCartThunk(cart)),
	addQuantity: (id) => dispatch(addQuantityThunk(id)),
	subQuantity: (id) => dispatch(subQuantityThunk(id)),
	removeFromCart: (id) => dispatch(removeFromCartThunk(id))
    }
}

export default connect(mapState, mapDispatch)(Cart);
