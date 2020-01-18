import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/views/Home';

class App extends Component {
  render() {
    const HomePageComponent = () => <Home/>
    return (
    <Router>
      <Switch>
        <Route exact path="/" render= {HomePageComponent} />
      </Switch>
    </Router>
    );
  }
}