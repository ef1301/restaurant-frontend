import { CommentActions } from "semantic-ui-react";

//Action types, hoisted to the top
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
//export const SUB_QUANTITY = 'SUB_QUANTITY';
//export const ADD_QUANTITY = 'ADD_QUANTITY';
export const FETCH_CART = 'FETCH_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

//Action creator
function fetchCart(cart) {
    return {
        type: FETCH_CART,
        cart

    }
}

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

function updateQuantity(id) {
    return {
	type: UPDATE_QUANTITY,
	id
    }
}



/*function addToQuantity(id){
    return {
        type: ADD_TO_CART,
        id
    }
}


function subFromQuantity(id) {
    return {
        type: SUB_QUANTITY,
        id
    }
}*/


//Thunks
export const addItemThunk = (item) => (dispatch) => {
    let resolvedActionObject = addToCart(item);
    dispatch(resolvedActionObject);
}

export const fetchCartThunk = (cart) => (dispatch) => {
    let resolvedActionObject = fetchCart(cart);
    dispatch(resolvedActionObject);
};

export const updateQuantityThunk = (id) => (dispatch) => {
    let resolvedActionObject = updateQuantity(id);
    dispatch(resolvedActionObject);
}

/*export const addToQuantityThunk = (id) => (dispatch) => {
    let resolvedActionObject = addToQuantity(id);
    dispatch(resolvedActionObject);
}

export const subFromQuantityThunk = (id) => (dispatch) => {
    let resolvedActionObject = subFromQuantity(id);
    dispatch(resolvedActionObject);
}*/

// State is an object
const cartReducer = (state = {}, action) => {
    switch (action.type) {
    case FETCH_CART:
        return state;
    case ADD_TO_CART:
	if (state[action.item.id] === undefined) { //if does not exist in cart
	    return {...state, [action.item.id]: Number(action.item.quantity)};//add to state
	}
	return {...state, [action.item.id]: state[action.item.id] + Number(action.item.quantity )}
    case UPDATE_QUANTITY:
            return { ...state, [action.id]: state[action.id] + 1 }
    default:
	return state;
    }
}

//Cart allow you update order, checkout view - display order and give option to update payment and address
export default cartReducer
