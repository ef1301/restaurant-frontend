//Action types, hoisted to the top
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SUB_QUANTITY = 'SUB_QUANTITY';
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const FETCH_CART = 'FETCH_CART';

//Action creator
function addToCart(item){
    return {
        type: ADD_TO_CART,
        item
    }
}

function removeFromCart(item) {
    return {
        type: REMOVE_ITEM,
        item
    }
}

function subFromQuantity(id) {
    return {
        type: SUB_QUANTITY,
        id
    }
}

function addToQuantity(id){
    return {
        type: ADD_TO_CART,
        id
    }
}

function fetchCart(cart) {
    return {
        type: FETCH_CART,
        cart

    }
}

//Thunks
export const addItemThunk = (item) => (dispatch) => {
    let resolvedActionObject = addToCart(item);
    dispatch(resolvedActionObject);
}

export const fetchCartThunk = (cart) => (dispatch) => {
    let resolvedActionObject = fetchCart(cart);
    dispatch(resolvedActionObject);
};

const cartReducer = (state = {}, action) => {
    switch (action.type) {
    case ADD_TO_CART:
	state.map( (item) => {
	    if (item.id === action.item.id)
		return state;
	    else return [...state, action.item];
	})
      default:
        return state;
    }

}

//Cart allow you update order, checkout view - display order and give option to update payment and address

export default cartReducer
