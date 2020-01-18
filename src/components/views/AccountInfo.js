import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import Navbar from './Navbar';
import '../styles/Account.css';

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
		    <div className="editInfo">
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
		    <option>Choose...</option>
		    <option>...</option>
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
	    return(<div>
		   Name:
		   Phone Number:
		   Address:
		   <button variant="primary" type="button" onClick={this.handleEdit}>Edit</button>
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

	    	<div id="progress-bar">
		<div id="reward-status">
		</div>
		</div>

	    
	    </div>
		</div>
	);
    }
};

export default AccountInfo;
