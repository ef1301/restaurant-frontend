/*fetching orders, adding item to order, updating items order, deleting item of an order (upon checking out your order, your cart should be cleared)
 -> order reducer */

const FETCH_ORDERS = 'FETCH_ORDERS';
const ADD_ORDER = 'ADD_ORDER';
const UPDATE_ORDER = 'UPDATE_ORDER';
const DELETE_ORDER = 'DELETE_ORDER';

export const fetchOrdersThunk = () => (dispatch) => {
    //the axios.get call would go here to fetch the order so that we can map them to JSX elements
}

export const addOrderThunk = (order) => (dispatch) => {
    let resolvedActionObject = addOrder(order);
    dispatch(resolvedActionObject);
}

export const updateOrderThunk = (order) => (dispatch) => {
    let resolvedActionObject = updateOrder(order);
    dispatch(resolvedActionObject);
}

export const deleteOrderThunk = (id) => (dispatch) => {
    let resolvedActionObject = deleteOrder(id);
    dispatch(resolvedActionObject);
}

function fetchOrders(order) {
    return {
	type: FETCH_ORDERS,
	order
    }
}

function addOrder(order) {
    return {
	type: ADD_ORDER,
	order
    }
}

function updateOrder(order) {
    return {
	type: UPDATE_ORDER,
	order
    }
}

function deleteOrder(id) {
    return {
	type: DELETE_ORDER,
	id
    }
}

function orderReducer(state = [], action) {
    switch(action.type) {
    case FETCH_ORDERS:
	return action.order;
    case ADD_ORDER:
	return [...state, action.order];
    case UPDATE_ORDER:
	return state.map( (item) => {
	    if(item.id === action.order.id)
		return Object.assign( {}, item, action.order);
	    else return item;
	});
    case DELETE_ORDER:
	return state.filter( order => order.id !== action.id);
    default:
	return state;
    }
}

export default orderReducer;
