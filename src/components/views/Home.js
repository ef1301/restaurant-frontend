import React, { Component } from 'react';

//Referencing restaurant menu
class Home extends Component {
    constructor() {
	super();
    }

    componentDidMount() {



    }
    
    render() {
    return(       
    <div>
        <title> Restaurant Name </title>
        <div class="navbar">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Settings</a>
        </div>
    </div>
    );
}
}

export default Home;
