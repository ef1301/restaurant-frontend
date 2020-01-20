import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem, Button, Jumbotron, Container } from 'react-bootstrap';
import Navbar from '../views/Navbar';
import '../styles/Cart.css';
import CartList from '../views/CartList.jsx';
import { Link } from 'react-router-dom';
import { fetchCartThunk, addItemThunk } from "../../thunks";
//Connect Home Page data with data stored in cartReducer
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
      //this.props.fetchCart();
      console.log(this.props.cart);
  }

  handleChange(event) {
    if (event.target.value >= 1) {
      this.setState({ quantity: event.target.value });
    } else {
      alert("Your quantity must be 1 or higher");
    }
  }
  /* Homepage displays the items */
  // Cart page will give us all the selected items and the information about each product

  cardRender()
  {
      if(this.props.cart.length === 0) {
        return <p> Your cart is empty </p>
      }
      else{
	  return <CartList cart={this.props.cart}/>
      }
}

  render() {
    return (
      <div>
        <Navbar />
        <h1> CART </h1>
        
        <div className="back-button">
          <Link
            to="/"
            style={{
              fontSize: "18px",
              textDecoration: "none",
              color: "white"
            }}
          >
            Back
          </Link>
        </div>
        {this.cardRender()}
        <Button className="place-order" variant="primary" size="lg">
          Place Order
        </Button>
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
        addToCart: () => dispatch(addItemThunk())
    }
}

export default connect(mapState,mapDispatch)(Cart);