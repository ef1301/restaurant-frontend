//Action types, hoisted to the top
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const FETCH_CART = 'FETCH_CART';
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const SUB_QUANTITY = 'SUB_QUANTITY';

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

function removeFromCart(id) {
    return {
        type: REMOVE_ITEM,
        id
    }
}

function addQuantity(id) {
    return {
	type: ADD_QUANTITY,
	id
    }
}

function subQuantity(id) {
    return {
	type: SUB_QUANTITY,
	id
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

export const addQuantityThunk = (id) => (dispatch) => {
    let resolvedActionObject = addQuantity(id);
    dispatch(resolvedActionObject);
}

export const subQuantityThunk = (id) => (dispatch) => {
    let resolvedActionObject = subQuantity(id);
    dispatch(resolvedActionObject);
}

export const removeFromCartThunk = (id) => (dispatch) => {
    let resolvedActionObject = removeFromCart(id);
    dispatch(resolvedActionObject);
}

// State is an object
const cartReducer = (state = {}, action) => {
    switch (action.type) {
    case FETCH_CART:
        return state;
    case REMOVE_ITEM:
	return Object.keys(state).reduce((object, key) => {
	    if (key !== action.id) {
		object[key] = state[key]
	    }
	    return object
	}, {})
    case ADD_TO_CART:
	if (state[action.item.id] === undefined) { //if does not exist in cart
	    return {...state, [action.item.id]: Number(action.item.quantity)};//add to state
	}
	return {...state, [action.item.id]: state[action.item.id] + Number(action.item.quantity )}
    case ADD_QUANTITY:
	return { ...state, [action.id]: state[action.id] + 1 }
    case SUB_QUANTITY:
	if (state[action.id] === 0){
	    return state;
	}
	return { ...state, [action.id]: state[action.id] - 1 }
    default:
	return state;
    }
}

//Cart allow you update order, checkout view - display order and give option to update payment and address
export default cartReducer
