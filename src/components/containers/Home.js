import React, { Component } from 'react';
import '../styles/Home.css'
import Navbar from '../views/Navbar';
import Footer from '../views/Footer';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { fetchMenuThunk, addItemThunk } from "../../thunks";
import MenuItems from '../views/MenuDisplay';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    quantity: 0
	}
    }

    componentDidMount() {
	this.props.fetchMenu();
    }

    handleChange = (event) => {
	this.setState({ [event.target.name]: event.target.value });	
    }
    
    render() {
	return (<div>
		<Navbar />
		{/*<div className="image">
		   <img className="deals" src="https://www.chewboom.com/wp-content/uploads/2018/05/Burger-King-Offers-New-3.79-Kings-Meal-Deal-678x381.jpg"/>
		   </div>*/}
		<div className='menu-items'>
		<MenuItems menu={this.props.menu} quantity={this.state.quantity} handleChange={this.handleChange} addToCart={this.props.addToCart}/>
		</div>
		<Footer />
		</div>
	       );
    }   
}

function mapState(state){
    return {
	menu: state.menu,
	cart: state.cart
    }
}

function mapDispatch(dispatch, ownProps) {
    return {
	fetchMenu: () => dispatch(fetchMenuThunk()),
	addToCart: (item) => dispatch(addItemThunk(item))
    }
}

export default connect(mapState, mapDispatch)(Home);
