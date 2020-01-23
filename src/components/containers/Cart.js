import React, { Component } from 'react';
import Navbar from '../views/Navbar';
import Footer from '../views/Footer';
import '../styles/Cart.css';
import CartList from '../views/CartList.jsx';
import { Link } from 'react-router-dom';
import { fetchCartThunk, updateQuantityThunk } from "../../thunks";
import { connect } from 'react-redux'

class Cart extends Component {
    componentDidMount() {
	this.props.fetchCart();
		}

		increment = (id) => {
			//this.props.cart[id]++;
			this.props.updateQuantity(id);
			//this.props.fetchCart(this.props.cart);
		}

    currentItem = (id) => {
	return this.props.menu.find( (key) => key.id === Number(id))
    }

    itemRender = () => {
	if(Object.keys(this.props.cart).length === 0) {
            return <p> Your cart is empty </p>
	}
	else {
		return Object.keys(this.props.cart).map((key) => {
			console.log(this.props.cart, 'here')
				return (<CartList key={key} item={this.currentItem(key)} cart={this.props.cart} identifier={key} increment={this.increment} />);
	    })
	}
    }

    render() {
	return (
		<div>
			<Navbar />

			<div className="cart">
			<h1> CART </h1>
				<div className="cart-items">
					{this.itemRender()}
				</div>
			</div>
			<div className="button">
				<button><Link to="/Checkout">Proceed to checkout</Link></button>
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
			updateQuantity: (id) => dispatch(updateQuantityThunk(id))
    }
}

export default connect(mapState, mapDispatch)(Cart);
