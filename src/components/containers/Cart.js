import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Navbar from '../views/Navbar';
import '../styles/Cart.css';
import CartList from '../views/CartList.jsx';
import { Link } from 'react-router-dom';
import { fetchCartThunk, addItemThunk, fetchItemThunk } from "../../thunks";
import { connect } from 'react-redux'

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      id: "",
      img: "",
      description: "This food is delicious",
      quantity: 1
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
      this.props.fetchCart();
      console.log(this.props.cart);
  }

    handleChange(event) {
	if (event.target.value >= 1) {
	    this.setState({ quantity: event.target.value });
	}
	else {
	    alert("Your quantity must be 1 or higher");
	}
    }
    /* Homepage displays the items */
  // Cart page will give us all the selected items and the information about each product

    render() {
	return (
		<div>
		<Navbar />
		<div className="container">
		<h1> CART </h1>
		  <CartList cart={this.props.cart}/>
		<button id='checkout'><Link to="/Checkout">Proceed to checkout</Link></button>
		</div>
		</div>
		
    );
  }
} 

function mapState(state) {
    return {
        cart: state.cart
    }
}
function mapDispatch(dispatch) {
    return {
        fetchCart: () => dispatch(fetchCartThunk()),
        addToCart: () => dispatch(addItemThunk()),
        fetchItem: () => dispatch(fetchItemThunk())
    }
}

export default connect(mapState,mapDispatch)(Cart);
