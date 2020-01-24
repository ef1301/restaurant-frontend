/*
fetching/updating the account info, fetching and updating the payment_info(locally as a state) [the address, card #, cellphone #], fetching the points and updating points -> user reducer
*/
import axios from 'axios';

const FETCH_USER = 'FETCH_USER';
const FETCH_PAYMENT = 'FETCH_PAYMENT';
const CURRENT_USER = 'CURRENT_USER';
const UPDATE_USER = 'UPDATE_USER';

export const fetchUserThunk = (fetchedEmail) => (dispatch) => {
    axios.get("https://bytemee.herokuapp.com/api/users")
	.then(response => response.data)
	.then(users => users.map( (user) => {
	    if(user.email === fetchedEmail) {
		return dispatch(fetchUser(user));
	    }
	})
	)
	.catch(err => console.log(err))
}

export const fetchPaymentThunk = (id) => (dispatch) => {
    axios.get(`https://bytemee.herokuapp.com/api/users/${id}/payment`)
	.then(response => response.data)
	.then(userinfo => {
	    //console.log(userinfo);
	    dispatch(fetchPayment(userinfo[0]));})
    	.catch(err => console.log(err))
}

export const currentUserThunk = (user) => (dispatch) => {
    let resolvedActionObject = currentUser();
    dispatch(resolvedActionObject);
}

export const updateUserThunk = (user) => (dispatch) => {
    let resolvedActionObject = updateUser(user);
    dispatch(resolvedActionObject);
}

function fetchUser(user) {
    return {
	type: FETCH_USER,
	user
    }
}

function fetchPayment(user) {
    return {
	type: FETCH_PAYMENT,
	user
    }
}

function currentUser(user) {
    return {
	type: CURRENT_USER,
	user
    }
}

function updateUser(user) {
    return {
	type: UPDATE_USER,
	user
    }
}

function userReducer(state = {}, action) {
    switch(action.type) {
    case FETCH_USER:
	console.log(action);
	return action.user;
    case CURRENT_USER:
	return state;
    case UPDATE_USER:
	return state.map( (item) => {
	    if(item.id === action.user.id)
		return Object.assign( {}, item, action.order);
	    else return item;
	});
    case FETCH_PAYMENT:
	return Object.assign({}, state, action.user);
    default:
	return state;
	
    }
}

export default userReducer;
