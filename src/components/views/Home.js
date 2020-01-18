import React, { Component } from 'react';
import '../styles/Home.css'
import Navbar from './Navbar';
class Home extends Component {
    constructor() {
	super();
    }

    componentDidMount() {

    }
    
    render() {
	return(
		<div>
		<Navbar />

		<div id="progress-bar">
		<div id="reward-status">
		</div>
		</div>

		<div id="menu">
		{/*
		   array.map( (item) => {
		   <div className="menu-card" key={order_id}>
		   <span><h2>{menu.item}</h2> <input type="number" min=0><img src="someIcon" alt="Cart"/></span>
		   <img src="someUrl" alt="food"/>
		   </div>
		   }
		   
		 */}
	    </div>
		
            </div>
	);
    }   
}

export default Home;
