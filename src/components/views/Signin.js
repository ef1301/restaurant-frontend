import React, { Component } from 'react';

class Signin extends Component {
    constructor() {
        super();
        this.state = {
            email : "",
            password : "",
            redirect : false
        }
    } 
    //Just added a div tag inside "return()" to eliminate an error on console
    render() {
        return(
        <div>

        </div>);
    }
}

export default Signin;


