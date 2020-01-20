function CartView(props) {
    if(this.props.cart.length === 0) {
        return <p> Your cart is empty </p>
    }
    else{
	return( <div>
		{this.props.cart.map( (item) => ( 
			<Card className="mx-auto" style={{ width: "18rem" }} key={item.id} >
			<Card.Img
		    variant="top"
		    src="https://image.freepik.com/free-photo/delicious-cheeseburger_1232-503.jpg"
			/>
			<Card.Body>
			<Card.Title>Food Name</Card.Title>
			<Card.Text>{item.description}</Card.Text>
			</Card.Body>
			<ListGroup className="listgroup-quanity">
			<ListGroupItem>Quantity: {item.quantity}</ListGroupItem>
			</ListGroup>
			<Card.Body className="card-body">
			<input
		    type="number"
		    width="4vw"
		    fontSize="14px"
		    onChange={this.handleChange}
			></input>
			<Button variant="outline-danger">Remove</Button>
			</Card.Body>
			</Card>}

				    )}
		</div>
	      );
    }
}

export default CartView;
