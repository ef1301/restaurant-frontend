//Action types, hoisted to the top
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SUB_QUANTITY = 'SUB_QUANTITY';
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const FETCH_CART = 'FETCH_CART';
export const FETCH_ITEM = "FETCH_ITEM";


//Action creator
function fetchItem(item) {
    return {
        type: FETCH_ITEM,
        item
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

export const addToQuantityThunk = (id) => (dispatch) => {
    let resolvedActionObject = addToQuantity(id);
    dispatch(resolvedActionObject);
}

export const fetchItemThunk = (item) => (dispatch) => {
    let resolvedActionObject = fetchItem(item);
    dispatch(resolvedActionObject);
}

// State is an object
const cartReducer = (state = {}, action) => {
    switch (action.type) {
    case FETCH_CART:
        return state;
    case FETCH_ITEM:
        return state.item;
    case ADD_TO_CART:
	if (state[action.item.id] === undefined) { //if does not exist in cart
	    return {...state, [action.item.id]: Number(action.item.quantity)};//add to state
	}
	else {
	    return {...state, [action.item.id]: state[action.item.id] + Number(action.item.quantity )} }
    default:
        return state;
    }
}

//Cart allow you update order, checkout view - display order and give option to update payment and address
export default cartReducer
