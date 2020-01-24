import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";
import Navbar from "../views/Navbar";
import Footer from "../views/Footer";
import "../styles/Checkout.css";
import CheckoutList from '../views/CheckoutList.jsx'
import { fetchCartThunk, fetchPaymentThunk, currentUserThunk } from '../../thunks';
import { connect } from 'react-redux';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderPlaced : false
        }
	console.log(props);
    }

    componentDidMount() {
	this.props.fetchCart();
	this.props.fetchPayment(this.props.users.id);
    }

    currentItem = (id) => {
        console.log('item', id);
        return this.props.menu.find( (key) => key.id === Number(id))
    }

    itemOrderDisplay = () => {
        if(Object.keys(this.props.cart).length === 0) {
            return <p>No items in your cart.</p>
        }
        else {
            return Object.keys(this.props.cart).map( (key) => <CheckoutList cartItem={this.currentItem(key)} quantity={this.props.cart[key]} />)
        }
    }
    
    handleChange = (event) => {
	    this.setState({ [event.target.name]: event.target.value });
    }
    handleOrder = (event) => {
        event.preventDefault();
        this.setState({orderPlaced : true})
    }
    placeOrderRender() {
        return (
            <div className="checkout">
                <h1>Checkout</h1>
            </div>
        )
    };
    formRender() {
	return (
		<Form>

		<Form.Row>
		<Form.Group as={Col} controlId="formGridCard#">
                <Form.Label>Credit Card Number</Form.Label>
                <Form.Control value={this.props.users.cardNum} />
		</Form.Group>

		<Form.Group as={Col} controlId="formGridSecCode">
                <Form.Label>Security Code</Form.Label>
                <Form.Control value={this.props.users.secCode} />
		</Form.Group>
		</Form.Row>

		<Form.Row>
		<Form.Group as={Col} controlId="formGridStreetNum">
                <Form.Label>Street Number</Form.Label>
                <Form.Control value={this.props.users.streetNum} />
		</Form.Group>

		<Form.Group as={Col} controlId="formGridStreet">
                <Form.Label>Street</Form.Label>
                <Form.Control value={this.props.users.street} />
		</Form.Group>
		</Form.Row>

		<Form.Row>
		<Form.Group as={Col} controlId="formGridApt">
                <Form.Label>Apt/Suit/Other</Form.Label>
                <Form.Control value={this.props.users.aptNum}/>
		</Form.Group>

		<Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control value={this.props.users.city}/>
		</Form.Group>

		<Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" value={this.props.users.state}>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
                </Form.Control>
		</Form.Group>

		<Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control value={this.props.users.zipCode}/>
		</Form.Group>
		</Form.Row>
		</Form>
	);
    }

    render() {
        if(this.state.orderPlaced) {
            return (
                <div>
                    <Navbar />
                        <div className="checkout">
                            <h1>Order Received</h1>
                            {/* <h2>has been placed</h2>		 */}
                    {/* <div className='checkout-items'>
                    {this.itemOrderDisplay()}
                    </div>

                        <h2>Your Information</h2>
                    <div className="form">
                    {this.formRender()}
                    </div>

                    <h4> Total Price: </h4>
                    <p className="claim">Apply reward</p>
                    <select name="carlist" form="carform">
                        <option value="none">No Reward</option>
                        <option value="reward1">10% off</option>
                        
                    </select>
                    
                    <button onClick={this.handleOrder}>Place Order</button>
                    <button className="rebut">Reward</button> */}
                        </div>
                    <Footer />
                </div>
            )
        } else {
        console.log(this.props.cart);
        return (
            <div>
            <Navbar />
            <div className="checkout">
            <h1>Checkout</h1>
            <h2>Your Order</h2>		
            <div className='checkout-items'>
            {this.itemOrderDisplay()}
            </div>

                <h2>Your Information</h2>
            <div className="form">
            {this.formRender()}
            </div>

        <h4> Total Price: $ 19.19</h4>
        <div class="columns">
            <ul class="price">
                <li class="grey">Base : $ 10.5</li>
                <li>Service Fee : $ 2.00</li>
                <li>Deliver Fee : $ 5.00</li>
                <li>Taxes and Fees : $ 1.69</li>
            </ul>
        </div>
            <p className="claim">Apply reward</p>
            <select name="carlist" form="carform">
                <option value="none">No Reward</option>
                <option value="reward1">10% off</option>
                
            </select>
            
            <button onClick={this.handleOrder}>Place Order</button>
            <button className="rebut">Reward</button>
            </div>
            <Footer />
            </div>
        );
    }
    }
};

function mapState(state) {
    return {
	menu: state.menu,
	cart: state.cart,
	users: state.users
    }
}

function mapDispatch(dispatch) {
    return {
	currentUser: () => dispatch(currentUserThunk()),
        fetchCart: () => dispatch(fetchCartThunk()),
	fetchPayment: () => dispatch(fetchPaymentThunk())
    }
}

export default connect(mapState, mapDispatch)(Checkout);
