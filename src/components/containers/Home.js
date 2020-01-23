import React, { Component } from 'react';
import '../styles/Home.css'
import Navbar from '../views/Navbar';
import Footer from '../views/Footer';
import { fetchMenuThunk, addItemThunk, currentUserThunk } from "../../thunks";
import MenuItems from '../views/MenuDisplay';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    quantity: 0
	}
	console.log('PROPS', this.props);
    };
    componentDidMount() {
	this.props.currentUser();
	this.props.fetchMenu();
	console.log(this.props);
    };
    handleChange = (event) => {
	this.setState({ [event.target.name]: event.target.value });	
    };
    render() {
	return (<div>
		<Navbar />
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
	cart: state.cart,
	user: state.user
    }
}

function mapDispatch(dispatch, ownProps) {
    return {
	fetchMenu: () => dispatch(fetchMenuThunk()),
	addToCart: (item) => dispatch(addItemThunk(item)),
	currentUser: () => dispatch(currentUserThunk())
    }
}

export default connect(mapState, mapDispatch)(Home);
