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
    }

    componentDidMount() {
	this.props.fetchMenu();
    }

    /*handleChange = (event) => {
	this.setState({ [event.target.name]: event.target.value });
    }*/
    
    handleSubmit = (event) => {
	console.log(event.target.value);
	this.props.addToCart(event.target.value);
    }

    render() {
	return(
	    	<div>
		<Navbar />
		{/*<MenuItems menu={this.props.menu}/>*/}
		<div id="menu">
		<h1>MENU<img id='menu-icon' src="https://img.icons8.com/color/48/000000/restaurant-menu.png"/></h1>
		
	    {this.props.menu.map( (item) => 
		    <div className="menu-card" key={item.id}>
		    <h3>{item.item}</h3>
		    <img className="crop"src={item.imageUrl} alt={item.item}/>
		    <p style={{textAlign:'left', marginLeft: '5%'}}><b><u>Description:</u></b><br/> {item.description}</p>

		    <div className="bottom-right">
		    ${item.price}
		    <input className="amount" type="number" min='0' max='99'></input>
				 <img id="cart-icon" src="https://img.icons8.com/bubbles/50/000000/buy.png" alt="cart" />
				  </div>
			</div>
	    )}
	    
    	    </div>
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
