import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem, Button, Jumbotron, Container  } from 'react-bootstrap';
import Navbar from './Navbar';
import '../styles/Cart.css'
class Cart extends Component {
    constructor() {
        super();
        this.state = {
            itemId: '',
            img: '',
            description: 'This food is delicious',
            quantity: 1,
        }
    }

    componentDidMount() {
        
    }

    addToQuantity = () => {
        console.log('Increase by 1')
        this.setState({ quantity: this.state.quantity + 1 });
    }

    decreaseQuantity = () => {
        console.log('Decrease by 1')
        if(this.state.quantity>1) {
            this.setState({ quantity: this.state.quantity - 1})
        }
        else {
            alert('Quantity cannot be 1');
        }
    }

    render() {

        return(
            <div>
                <Navbar />
                    <h1> Cart </h1>

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
                        <Button variant="light" onClick={this.decreaseQuantity} >-</Button>
                        <Button variant="light" onClick={this.addToQuantity} >+</Button>
                        <Button variant="outline-danger">Remove</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
} 

export default Cart;