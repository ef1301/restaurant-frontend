import React, { Component } from 'react';
import '../styles/Cart.css';
import { updateQuantityThunk } from "../../thunks";
import { connect } from 'react-redux';

class CartList extends Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	id: this.props.identifier,
		// 	quantity: 0
		// }
	}

	componentDidMount() {
	}

	// increment = () => {
	// 	let num = this.state.quantity + 1;
	// 	this.setState({ quantity: num });
	// 	this.props.updateQuantity(this.state);

	// }

	// decrement = () => {
	// 	let num = this.state.quantity - 1;
	// 	this.setState({ quantity: num });
	// 	this.props.updateQuantity(this.state);
	// }



	render() {
		return (
			<div className="cart-card" key={this.props.item.id}>
				<p>{this.props.item.item} ${this.props.item.price}</p>
				<img className="crop" src={this.props.item.imageUrl} alt={this.props.item.item} />
				<p>Quantity: {this.props.cart[this.props.item.id]}</p>
				<button onClick={() => this.props.increment(this.props.item.id)}> + </button>
				<button> - </button>
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
		// updateQuantity: (item) => dispatch(updateQuantityThunk(item)),
	}
}


export default connect(mapState, mapDispatch)(CartList);
