import React, { Component } from 'react';
import Carousel from "react-bootstrap/Carousel";
import '../styles/Home.css'
import Navbar from './Navbar';
import { fetchMenuThunk, addItemThunk } from "../../thunks";
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    id: '',
	    quantity: 1
	}
    }

    componentDidMount() {
	this.props.fetchMenu();
    }
    
    handleOnClick = (event) => {
	    alert("You've added an item to your cart!");
	    console.log('clicked', this.props.cart);
	    console.log(event.target.value);
	    this.props.addToCart(event.target.value);
	}

    render() {
	return (
		<div>
		<Navbar />
		<div id="menu">
		<h1>MENU</h1>
		{this.props.menu.map( (item) => (
			<div className="menu-card" key={item.id}>
			<h3>{item.item}</h3>
			<img className="crop"src={item.imageUrl} alt={item.item}/>
			<p style={{textAlign:'left', marginLeft: '5%'}}><b><u>Description:</u></b><br/> {item.description}</p>

		    
		    	<div className="bottom-right">
			${item.price}
			<input className="amount" type="number" value={this.state.quantity} min='0' max='99'></input>
			<img src="https://img.icons8.com/bubbles/50/000000/buy.png" alt="cart" onClick={this.handleOnClick}/></div>
			</div>
		))}
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
