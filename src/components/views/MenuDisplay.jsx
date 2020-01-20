import React from "react";

function MenuItems(props) {
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
		  <input className="amount" type="number" name="quantity" min='0' max='99'></input>
		  <img id="cart-icon" src="https://img.icons8.com/bubbles/50/000000/buy.png" alt="cart"/></div>
	      </div>
	  ))}
    	</div>);
}

export default MenuItems;
