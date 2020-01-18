//Imports for CSS & modules
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Imports for components
import Home from '../components/views/Home';
import AccountInfo from '../components/views/AccountInfo';


class App extends Component {
    render() {
	return (
	    
	    <Router>
	    <Switch>
		<Route exact path="/" render={() => <Home/>} />
		<Route exact path="/AccountInfo" render={() => <AccountInfo/>} />		
	    </Switch>
		</Router>
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
