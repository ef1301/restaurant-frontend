import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem, Button, Jumbotron, Container  } from 'react-bootstrap';
import Navbar from './Navbar';
import '../styles/Cart.css'
class Cart extends Component {
    constructor() {
        super();
        this.state = {
            img: '',
            description: 'This food is delicious',
            quantity: 1,
        }
    }

    componentDidMount() {
        
    }
    render() {
        return(
            <div>
                <Navbar />
                    <h1> Cart </h1>

                <Card className="mx-auto" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                    <Card.Body>
                        <Card.Title>Food Name</Card.Title>
                        <Card.Text>{this.state.description}</Card.Text>
                    </Card.Body>
                    <ListGroup className="listgroup-quanity">
                    <ListGroupItem>Quantity: {this.state.quantity}</ListGroupItem>
                    </ListGroup>
                    <Card.Body className="card-body">  
                        <Button variant="light">-</Button>
                        <Button variant="light">+</Button>
                        <Button variant="outline-danger">Remove</Button>
                    </Card.Body>
                </Card>

            </div>
        );
    }
} 


export default Cart;