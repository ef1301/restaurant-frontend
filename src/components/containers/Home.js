import React, { Component } from 'react';
import '../styles/Home.css'
import Navbar from '../views/Navbar';
import { fetchMenuThunk, addItemThunk } from "../../thunks";
//Added from cartReducer
import MenuItems from '../views/MenuDisplay';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    id: '',
	    quantity: 0
	}
    }

    componentDidMount() {
	this.props.fetchMenu();
    }

    handleChange = (event) => {
	this.setState({ [event.target.name]: event.target.value });
    }
    
    handleOnClick = (event) => {
	//this.props.addToCart();
    }

    render() {
	return(
	    	<div>
		<Navbar />
		<MenuItems menu={this.props.menu}/>
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
