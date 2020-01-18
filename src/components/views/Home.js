import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
class Home extends Component {
    constructor() {
	super();
    }

    componentDidMount() {

    }
    //Omitted <body> and <head> tags for the time being due to 
    render() {
    <div>
        <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        </head>
    <div class="header">
    <h1>Restaurant Name</h1>
    </div>
    <div class="navbar">
    <a href="#" class="active">Home</a>
    <a href="#">Account</a>
    <a href="#" class="right">Cart</a>
    </div>
    <body>
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class= "item active">
                <img src="https://img.favpng.com/5/9/10/hamburger-bacon-sushi-pizza-cheeseburger-png-favpng-crPeKgZNhFJzytS3X4TCwJywK.jpg" alt="hamburger"></img>
            </div>
            <div class="item">
                <img src="https://www.kingarthurflour.com/sites/default/files/styles/featured_image/public/recipe_legacy/20-3-large.jpg?itok=1EY8KWJG.jpg" alt="Pizza"></img>
                </div>
            <div class="item">
                <img src="https://www.thespruceeats.com/thmb/PuOmddYBphu3oraq80vYkJjWvG4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/traditional-chicken-wings-912937-10-5b3f8c9ac9e77c00547241ab.jpg" alt="New York"></img>
            </div>
        </div>
    </div>
    <div>
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
    </a>
        <script src="script.js"></script>
    </div>
    </body>
    <div class="footer">
    <h2>Footer</h2>
    </div>
    </div>
}   
}

export default Home;
