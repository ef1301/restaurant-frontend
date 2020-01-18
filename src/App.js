import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import './App.css';
import Landing from './components/views/Landing';

class App extends Component {
  render() {
    const LandingComponent = () => <Landing/>
    return (
    <Router>
      <Switch>
        <Route exact path="/" render= {HomePageComponent} />
      </Switch>
    </Router>
    );
  }
}