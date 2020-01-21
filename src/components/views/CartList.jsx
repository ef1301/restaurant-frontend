import React from 'react';

function CartList(props) {
    if(Object.keys(props.cart).length === 0) {
        return <p> Your cart is empty </p>
    }
    else{
	return( <div>
		<h1>stuff</h1>
    		</div>

	      );
    }
}

export default CartList;
