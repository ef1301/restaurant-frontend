import React, { Component } from 'react';
import Navbar from '../views/Navbar';
import Footer from '../views/Footer';
import '../styles/Cart.css';
import CartList from '../views/CartList.jsx';
import { Link } from 'react-router-dom';
import { fetchCartThunk, addItemThunk, addToQuantityThunk, subFromQuantityThunk } from "../../thunks";
import { connect } from 'react-redux'

class Cart extends Component {
    componentDidMount() {
	this.props.fetchCart();
	console.log(this.props.cart);
    }

    handleChange = (event) => {
	if (event.target.value >= 1) {
	    this.setState({ quantity: event.target.value });
	}
	else {
	    alert("Your quantity must be 1 or higher");
	}
    }

    addToQuantity = (id) => {
	this.props.addToQuantity(id);
    }

    subFromQuantity = (id) => {
	this.props.subFromQuantity(id);
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
		console.log('key', key);
		return (<CartList key={key} quantity={this.props.cart[key]} item={this.currentItem(key)} />);
	    })
	}
    }

    render() {
	return (
		<div>
		<Navbar />
		
		<div className="cart">
		<h1> CART </h1>
		<button id='checkout'><Link to="/Checkout">Proceed to checkout</Link></button>
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
	subFromQuantity: () => dispatch(subFromQuantityThunk()),
	addToQuantity: () => dispatch(addToQuantityThunk()),
        fetchCart: () => dispatch(fetchCartThunk()),
        addToCart: () => dispatch(addItemThunk())
    }
}

export default connect(mapState,mapDispatch)(Cart);
