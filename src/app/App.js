//Imports for CSS & modules
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Imports for components
import AccountInfo from '../components/views/AccountInfo';


class App extends Component {
    render() {
	return (
		<div className="App">

		</div>
	);
    }
}

function mapState(state) {
    return { };
}

function mapDispatch(dispatch) {
    return { };
}

export default connect(null,null)(App);
