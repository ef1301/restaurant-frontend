import React, { Component } from 'react';
import jwt_decode from "jwt-decode";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { fetchUserThunk } from '../../thunks';
import { connect } from "react-redux";  
import '../styles/Signin.css';
import { Form, Button } from 'react-bootstrap';

class Signin extends Component {
    constructor() {
        super();
        this.state = {
            email : "",
            password : "",
            isLoggedIn : false,
	    error: ""
        }
    };
    componentDidMount() {
	if(sessionStorage.getItem("byteMe")) {
	    this.props.history.push("/home");
	} else {
	    this.props.history.push("/");
	}
    };
    handleChange = event => ({ target }) => {
	this.setState({
	    [event]: target.value
	});
    };
    handleEnter = async(event) => {
	if(event.key === "Enter" || event.key === 13){
	    event.preventDefault();
	    this.handleSubmit();
	}	
    };
    handleSubmit = async(event) => {
	event.preventDefault();
	try {
	    let loginInfo = {
		email: this.state.email.toLocaleLowerCase(),
		password: this.state.password
	    }
	    let res = await axios.post("https://bytemee.herokuapp.com/api/auth/login", loginInfo);
	    if(res) {
		let token = res["data"]["token"];
		let id = res["data"]["user"].id;
		sessionStorage.setItem("byteME", token);
		let decoded = jwt_decode(token);
		sessionStorage.setItem("email", decoded.email);
		sessionStorage.setItem("id", id);
		this.props.history.push("/home");
		this.props.fetchUser(this.state.email);
	    }
	} catch(err) {
	    this.setState({
		error: "Wrong email and/or password"
	    })
	    console.log(err);
	}
    };

    // handleUser = () => {
    // 	if(this.state.newUser === false) {
    //     this.setState({newUser: true});
    // }
    // else {
    //     this.setState({newUser: false});
    // }
    // }
    formRender() {
	// if(this.state.newUser === false) {
	return(
		<form id="Signin" onSubmit={this.handleSubmit}>
		<h2 style={{marginBottom: '2%'}}>Sign In</h2>
		<Form.Group controlId="formBasicEmail">
		<Form.Label>Email address</Form.Label>
		<Form.Control type="email" placeholder="Enter email" onChange={this.handleChange("email")} />
		<Form.Text className="text-muted">
		{` We'll never share your email with anyone else `}
	    </Form.Text>
		</Form.Group>

		<Form.Group controlId="formBasicPassword">
		<Form.Label>Password</Form.Label>
		<Form.Control type="password" placeholder="Password" onChange={ this.handleChange("password") } onKeyPress = {this.handleKeyPress} />
		</Form.Group>
		<Button variant="primary" type="submit" onClick={this.handleSubmit}>Sign In</Button>
		{/* <a id="change" style={{backgroundColor: '#ececd2'}} onClick={this.handleUser}>Sign up?</a> */}
	    </form>
	);
	//}
	// else {
	//     return(
	// 	    <div id="Signin">
	// 	    <h2 style={{marginBottom: '2%'}}>Sign Up</h2>
	// 	    <Form.Group controlId="formGroupEmail">
	// 	    <Form.Label>Email address</Form.Label>
	// 	    <Form.Control type="email" placeholder="Enter email" />
	// 	    </Form.Group>
	
	// 	    <Form.Group controlId="formGroupPassword">
	// 	    <Form.Label>Password</Form.Label>
	// 	    <Form.Control type="password" placeholder="Password" />
	// 	    <Form.Label>Confirm Password</Form.Label>
	// 	    <Form.Control type="password" placeholder="Confirm Password" />
	// 	    </Form.Group> 
	// 	    <Button variant="primary" type="submit">Sign Up</Button>
	// 	    <a id="change" style={{backgroundColor: '#ececd2'}} onClick={this.handleUser}>Already a user?</a>
	// 	    </div>
	//     );
	// }

    }
    
    render() {
	return(
		<div>
		<div id="header">
		<h1 className="title">Byte me</h1>
		</div>
		<div id="Signin">		
		{this.formRender()}
	    {this.state.error.length > 0 ? (<h3 style={{ color: "Red"}}>{this.state.error}</h3>) : (<div></div>)}
	    </div>
		</div>
	);
    }
}

const mapState = state => ({
    user: state.user
})

function mapDispatch(dispatch) {
    return {
	fetchUser: (fetchedEmail) => dispatch(fetchUserThunk(fetchedEmail))
    }
}

export default withRouter(connect(mapState, mapDispatch) (Signin))
