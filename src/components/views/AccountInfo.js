import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import Navbar from './Navbar';
import '../styles/Account.css';
import ProgressBar from './Reward';

class AccountInfo extends Component{
    constructor(props) {
	super(props);
	this.state = {
	    edit: false
	}
    }

    handleEdit = () => {
	this.setState({edit: true});
    }

    handleChange = (event) => {
	this.setState({ [event.target.name]: event.target.value });
    }
    
    handleSubmit = (event) => {
	this.setState({edit: false});
    }
    
    formRender() {
	if(this.state.edit === true) {
	    return(
		    <div className="info">
		    <Form>
		    <Form.Row>
		    <Form.Group as={Col} controlId="formGrid">
		    <Form.Label>First Name</Form.Label>
		    <Form.Control type="text" placeholder="Enter first name" />
		    </Form.Group>

		    <Form.Group as={Col} controlId="formGrid">
		    <Form.Label>Last Name</Form.Label>
		    <Form.Control type="text" placeholder="Enter last name" />
		    </Form.Group>
		    </Form.Row>

		    <Form.Group controlId="formGrid">
		    <Form.Label>Phone Number</Form.Label>
		    <Form.Control type="text" placeholder="Phone number" />
		    </Form.Group>
		    <br/>

		    <Form.Row>
		    <Form.Group as={Col} controlId="formGridCard#">
		    <Form.Control placeholder="Credit card number" />
		    </Form.Group>
		    
		    <Form.Group as={Col} controlId="formGridSecCode">
		    <Form.Control placeholder="Security Code" />
		    </Form.Group>
		    </Form.Row>

		
		    <Form.Row>
		    <Form.Group as={Col} controlId="formGridStreetNum">
		    <Form.Label>Street Number</Form.Label>
		    <Form.Control placeholder="Street number" />
		    </Form.Group>
		    
		    <Form.Group as={Col} controlId="formGridStreet">
		    <Form.Label>Street</Form.Label>
		    <Form.Control placeholder="Street" />
		    </Form.Group>
		    </Form.Row>

		    <Form.Row>
		    <Form.Group as={Col} controlId="formGridApt">
		    <Form.Label>Apt/Suit/Other</Form.Label>
		    <Form.Control />
		    </Form.Group>
		    
		    <Form.Group as={Col} controlId="formGridCity">
		    <Form.Label>City</Form.Label>
		    <Form.Control />
		    </Form.Group>

		    <Form.Group as={Col} controlId="formGridState">
		    <Form.Label>State</Form.Label>
		    <Form.Control as="select">
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
		    <Form.Control />
		    </Form.Group>
		    </Form.Row>

		    <Button variant="primary" type="submit">Save Changes</Button>
		    </Form>
		    </div>
	    );
	}
	else {
	    return(<div className="info">
		   <h3 className="account">Account Information</h3>
		   <p className="name"> Name: </p>
		   <p className="num">Phone Number: </p>
		   <p className="add">Address: </p>
		   <button className="edit" variant="primary" type="button" onClick={this.handleEdit}>Edit</button>
		   </div>
		  );
	}
    }

    render() {
	return (
		<div>
		<Navbar />
		<div className="container">
		{this.formRender()}

		<div className="rewards">
		<h3>Rewards</h3>
	    	<div id="progress-bar">
		<ProgressBar />
		</div>
		
		</div>

	    
	    </div>

	    
	    </div>
		
	);
    }
};

export default AccountInfo;
