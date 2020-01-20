import React, { Component } from 'react';
//import '../styles/Signin.css';
import { Form, Col, Button } from 'react-bootstrap';

class Signin extends Component {
    constructor() {
        super();
        this.state = {
            email : "",
            password : "",
            redirect : false,
	    newUser: false
        }
    }

    handleUser = () => {
    	if(this.state.newUser === false) {
	    this.setState({newUser: true});
	}
	else {
	    this.setState({newUser: false});
	}
    }
    formRender() {
	if(this.state.newUser === false) {
	    return(
		    <div id="Signin">
		    <h2 style={{marginBottom: '2%'}}>Sign In</h2>
		    <Form.Group controlId="formBasicEmail">
		    <Form.Label>Email address</Form.Label>
		    <Form.Control type="email" placeholder="Enter email" />
		    <Form.Text className="text-muted">
		    "We'll never share your email with anyone else."
		</Form.Text>
		    </Form.Group>

		    <Form.Group controlId="formBasicPassword">
		    <Form.Label>Password</Form.Label>
		    <Form.Control type="password" placeholder="Password" />
		    </Form.Group>
		    <Button variant="primary" type="submit">Sign In</Button>
		    <a id="change" onClick={this.handleUser}>Sign up?</a>
		    </div>
	    );
	}
	else {
	    return(
		    <div id="Signin">
		    <h2 style={{marginBottom: '2%'}}>Sign Up</h2>
		    <Form.Group controlId="formGroupEmail">
		    <Form.Label>Email address</Form.Label>
		    <Form.Control type="email" placeholder="Enter email" />
		    </Form.Group>
		    
		    <Form.Group controlId="formGroupPassword">
		    <Form.Label>Password</Form.Label>
		    <Form.Control type="password" placeholder="Password" />
		    <Form.Label>Confirm Password</Form.Label>
		    <Form.Control type="password" placeholder="Confirm Password" />
		    </Form.Group> 
		    <Button variant="primary" type="submit">Sign Up</Button>
		    <a id="change" onClick={this.handleUser}>Already a user?</a>
		    </div>
	    );
	}

    }
    
    render() {
	return(
	    <div>
	    	<div id="header">
		<h1>Bytemee</h1>
		</div>

		<div id="Signin">		
		{this.formRender()}
	    </div>
		</div>
	);
    }
}

export default Signin;


