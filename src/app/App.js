//Imports for CSS & modules
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Imports for components
import Home from '../components/containers/Home';
import AccountInfo from '../components/containers/AccountInfo';
import Signin from '../components/containers/Signin';
import Signup from '../components/containers/Signup';
import Cart from '../components/containers/Cart'; 
import Checkout from '../components/views/Checkout';

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            loggedIn: true
        }
    };

    login() {
        if(this.state.loggedIn === true) {
            return (<Route exact path="/" render={() => <Home/>} />);
        }
        else {
            return (<Route exact path="/SignIn" render={() => <Signin/>} />);
        }
    }
    
    render() {
	//console.log(this.props.menu);
	return (
    <Router>
      <Switch>
        {this.login()}
        <Route exact path="/accountInfo" render={() => <AccountInfo />} />
        <Route exact path="/cart" render={() => <Cart />} />
        <Route exact path="/checkout" render={() => <Checkout />} />
        <Route exact path="/signin" render={() => <Signin />} />
        <Route exact path="/signup" render={() => <Signup />} />
      </Switch>
    </Router>
  );
    }
}

function mapState(state) {
    return {
	menu: state.menu
    };
}

function mapDispatch(dispatch) {
    return { };
}

export default connect(mapState,null)(App);
