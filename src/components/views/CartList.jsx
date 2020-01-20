import React from 'react';

function CartList(props) {
    if(this.props.cart.length === 0) {
        return <p> Your cart is empty </p>
    }
    else{
	return( <div>
		{this.props.cart.map( (item) => (
		    <div className="menu-card" key={item.id}>
		      <h3>{item.item}</h3>
		      <img className="crop"src={item.imageUrl} alt={item.item}/>
		      <p id="description"><b><u>Description:</u></b><br/> {item.description}</p>

		      <div className="bottom-right">
			Quantity: {item.quantity}
		      </div>
		    </div>
		))}
    		</div>

	      );
    }
}

export default CartList;
