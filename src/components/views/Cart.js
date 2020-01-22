import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem, Button, } from 'react-bootstrap';
import Navbar from './Navbar';
import '../styles/Cart.css';
import { Link } from 'react-router-dom';
import { fetchCartThunk, addItemThunk } from "../../thunks";
import cartReducer from "../../store/utilities/cartReducer";
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
      //console.log(this.props.cart);
  }

  handleChange(event) {
    if (event.target.value >= 1) {
      this.setState({ quantity: event.target.value });
    } else {
      alert("Your quantity must be 1 or higher");
    }
  }
    
  cardRender()
  {
      if(this.props.cart.length === 0) {
        return <p> Your cart is empty </p>
      }
      else{
        this.props.cart.map( (item) => ( 
            <Card className="mx-auto" style={{ width: "18rem" }} key={item.id} >
          <Card.Img
            variant="top"
            src="https://image.freepik.com/free-photo/delicious-cheeseburger_1232-503.jpg"
          />
          <Card.Body>
            <Card.Title>Food Name</Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
          <ListGroup className="listgroup-quanity">
            <ListGroupItem>Quantity: {item.quantity}</ListGroupItem>
          </ListGroup>
          <Card.Body className="card-body">
            <input
              type="number"
              width="4vw"
              fontSize="14px"
              onChange={this.handleChange}
            ></input>
            <Button variant="outline-danger">Remove</Button>
          </Card.Body>
        </Card>
        )
        )
  }
}

  render() {
    return (
      <div>
        <Navbar />
        <h1> CART </h1>
        <div className="back-button">
        </div>
        {this.cardRender()}
        <Button className="place-order" variant="primary" size="lg">
          <Link to="/Checkout"> Next </Link>
        </Button>
        {Object.keys(this.props.cart).map( (key) => 
          console.log('REEE',key)
        )}

      </div>
    );
  }
} 

function mapState(state) {
    return {
        cart: state.cart,
        item: state.item        
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
