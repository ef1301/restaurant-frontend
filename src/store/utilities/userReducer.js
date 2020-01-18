/*
fetching/updating the account info, fetching and updating the payment_info(locally as a state) [the address, card #, cellphone #], fetching the points and updating points -> user reducer
*/

const FETCH_USER = 'FETCH_USER';
const UPDATE_USER = 'UPDATE_USER';

export const fetchUserThunk = () => (dispatch) => {
  //the axios.get call would go here to fetch the user  so that we can map them to JSX elements
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

function updateUser(user) {
    return {
	type: UPDATE_USER,
	user
    }
}

function userReducer(state = [], action) {
    switch(action.type) {
    case FETCH_USER:
	return action.user;
    case UPDATE_USER:
	return state.map( (item) => {
	    if(item.id === action.user.id)
		return Object.assign( {}, item, action.order);
	    else return item;
	});
    default:
	return state;
	
    }
}

export default userReducer;
