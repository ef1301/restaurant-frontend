import React from 'react';
import '../styles/Cart.css';
import { fetchMenuItemThunk, fetchCartThunk } from '../../thunks'

function CartList(props) {
    console.log(props);
    return (
	<div className="cart-card" key={props.item.id}>
	  <p>{props.item.item} {props.quantity} ${props.item.price}</p>
	</div>
    );
    
}

export default (CartList);
