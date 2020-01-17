import React, { Component } from 'react';

//Referencing restaurant menu
class Home extends Component {
    constructor() {
	super();
    }

    componentDidMount() {



    }
    //This page references the Restaurant View
    render() {
    return(       
    <div>
        <title> Restaurant Name </title>
        <div class="navbar">
            <a href="#">Home</a>
            <a href="#">Account Info</a>
            <a href="#">Cart</a>
        </div>
    </div>
    );
}
}

export default Home;
