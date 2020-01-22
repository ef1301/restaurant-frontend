import React from 'react';
import '../styles/Cart.css';
import { fetchMenuItemThunk, fetchCartThunk } from '../../thunks'

function CartList(props) {
    console.log(props);
    return (
	<div className="cart-card" key={props.item.id}>
	  <p>{props.item.item} <nl/>{props.quantity} ${props.item.price}</p>
      <img className="image-in-card" src={props.item.imageUrl} />
	</div>
    );
    //props.item.image.Url is possible beacause we access that specific item, and take its imageUrl
} 

export default (CartList);
