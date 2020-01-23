import React from "react";

function MenuItems(props) {
    console.log(props);
    return (
	<div id="menu">
	  <h1>MENU<img id='menu-icon' src="https://img.icons8.com/color/48/000000/restaurant-menu.png"/></h1>
	  
	  {props.menu.map( (item) => (
	      <div className="menu-card" key={item.id}>
		<h3>{item.item}</h3>
		<img className="crop"src={item.imageUrl} alt={item.item}/>
		<p style={{textAlign:'left', marginLeft: '5%'}}><b><u>Description:</u></b><br/> {item.description}</p>

		<div className="bottom-right">
		  ${item.price}

		  <form onSubmit={(event) => {
			if(props.quantity === 0 ){
			    alert('Please enter a quantity!');
			}
			else {
			    event.preventDefault();
			    alert(`${props.quantity} ${item.item} has been added to cart!`);
			    props.addToCart({id: item.id, quantity: props.quantity});
			}
		    }}>
		  <input className="amount" type="number" name="quantity" min='0' max='99' onChange={props.handleChange}></input>
		  <img id="cart-icon" src="https://img.icons8.com/bubbles/50/000000/buy.png" alt="cart" onClick={(event) => {
			if(props.quantity === 0 ){
			    alert('Please enter a quantity!');
			}
			else {
			    event.preventDefault();
			    alert(`${props.quantity} ${item.item} has been added to cart!`);
			    props.addToCart({id: item.id, quantity: props.quantity});
			}
		    }}/>
		    </form>
		</div>
	      </div>
	  ))}
	
    	</div>);
}

export default MenuItems;
