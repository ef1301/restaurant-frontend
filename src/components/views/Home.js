import React, { Component } from 'react';
import '../styles/Home.css'
import Navbar from './Navbar';
import { fetchMenuThunk } from '../../thunks';
import { connect } from 'react-redux';


class Home extends Component {
    constructor(props) {
	super(props);
    }

    componentDidMount() {
	this.props.fetchMenu();
	console.log(this.props.menu);
    }
    
    render() {
	console.log(this.props.menu);
	return(
		<div>
		<Navbar />

		<div id="progress-bar">
		<div id="reward-status">
		</div>
		</div>

		<div id="menu">
		{this.props.menu.map( (item) => (
			<div className="menu-card" key={item.id}>
			<img style={{height:50}} src={item.imageUrl} alt={item.item}/>
			<label>{item.item}</label>
			<input type="number" style={{width:70}}></input>

			<img src="https://img.icons8.com/clouds/100/000000/shopping-cart-promotion.png" alt="cart"/>
			</div>
		))}
		 
	    </div>
		
            </div>
	);
    }   
}

function mapState(state){
    return {
	menu: state.menu
    }
}

function mapDispatch(dispatch, ownProps) {
    return {
	fetchMenu: () => dispatch(fetchMenuThunk())
    }
}

export default connect(mapState, mapDispatch)(Home);
