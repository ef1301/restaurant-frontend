import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem, Button, Jumbotron, Container } from 'react-bootstrap';
import Navbar from './Navbar';
import '../styles/Cart.css'
import { Link } from 'react-router-dom';
import { HelpBlock } from 'react-bootstrap';
class Cart extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            id: '',
            img: '',
            description: 'This food is delicious',
            quantity: 1,
        }
    }

    componentDidMount() {
        
    }

    // addToQuantity = () => {
    //     console.log('Increase by 1')
    //     this.setState({ quantity: this.state.quantity + 1 });
    // }

    // decreaseQuantity = () => {
    //     console.log('Decrease by 1')
    //     if(this.state.quantity>1) {
    //         this.setState({ quantity: this.state.quantity - 1})
    //     }
    //     else {
    //         alert('Quantity cannot be 1');
    //     }
    // }

    render() {

        return(
            <div>
                <Navbar />
                    <h1> CART </h1>

                <Card className="mx-auto" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://image.freepik.com/free-photo/delicious-cheeseburger_1232-503.jpg" />
                    <Card.Body>
                        <Card.Title>Food Name</Card.Title>
                        <Card.Text>{this.state.description}</Card.Text>
                    </Card.Body>
                    <ListGroup className="listgroup-quanity">
                        <ListGroupItem>Quantity: {this.state.quantity}</ListGroupItem>
                    </ListGroup>
                    <Card.Body className="card-body">  
                        <input type="number"></input>
                        <Button variant="outline-danger">Remove</Button>
                    </Card.Body>
                </Card>
                <div className="back-button">
                    <Link to="/" style={{ fontSize: '18px', textDecoration: 'none', color: "white"}} >Back</Link>
                </div>

                <Button className="place-order" variant="primary" size="lg">
                    Place Order
                </Button>

            </div>
        );
    }
} 

export default Cart;