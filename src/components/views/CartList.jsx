import React, { Component } from 'react';
import '../styles/Cart.css';
import { updateQuantityThunk } from "../../thunks";
import { connect } from 'react-redux';

class CartList extends Component {
    constructor(props) {
	super(props);
    }

    render() {
	return (
	    <div className="cart-card" key={this.props.item.id}>
	      <p>{this.props.item.item} ${this.props.item.price}</p>
	      <img className="crop" src={this.props.item.imageUrl} alt={this.props.item.item} />
	      <p>Quantity: {this.props.cart[this.props.item.id]}</p>
	      <button onClick={ () => this.props.increment(this.props.item.id)}> + </button>
	      <button onClick={ () => this.props.decrement(this.props.item.id)}> - </button>
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

export default connect(mapState, null)(CartList);
