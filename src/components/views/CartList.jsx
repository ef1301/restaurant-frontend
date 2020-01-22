import React, { Component } from 'react';
import '../styles/Cart.css';
import { updateQuantityThunk } from "../../thunks";

class CartList extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    id: this.props.item.id,
	    quantity: this.props.cart[this.props.item.id]
	}
	console.log(this.state.quantity);
    }

    increment = () => {
	this.setState({quantity: this.state.quantity + 1});
	this.props.updateQuantity(this.state);
	
    }

    decrement = () => {
	this.setState({quantity: this.state.quantity - 1});
	this.props.updateQuantity(this.state);
    }
    
    render() {
	return (
	    <div className="cart-card" key={this.props.item.id}>
	      <p>{this.props.item.item} ${this.props.item.price}</p>
	      <img className="crop" src={this.props.item.imageUrl} />
	      <p>Quantity: {this.props.cart[this.props.item.id]}</p>
	      <button onClick={this.increment}> + </button>
	      <button> - </button>
	    </div>
	);
    }
}

function mapDispatch(dispatch) {
    return {
	updateQuantity: (item) => dispatch(updateQuantityThunk(item)),
    }
}


export default CartList;
