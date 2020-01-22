import React from 'react';
import '../styles/Cart.css';


function CartList(props) {
    console.log(props);
    return (
	<div className="cart-card" key={props.item.id}>
	  <p>{props.item.item} ${props.item.price}</p>
	  <img className="crop" src={props.item.imageUrl} />
	  <p>Quantity: {props.quantity}</p>

	  <div className="cart-buttons">
	    <button> + </button>
	    <button> - </button>
	  </div>
	</div>
    );
    //props.item.image.Url is possible beacause we access that specific item, and take its imageUrl
} 

export default (CartList);
