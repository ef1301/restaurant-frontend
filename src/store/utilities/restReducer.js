//fetching the restaurant info -> restaurant reducer

const FETCH_RESTAURANT = 'FETCH_RESTAURANT';

export const fetchRestaurantThunk = () => (dispatch) => {
    //the axios.get call would go here to fetch the restaurant so that we can map them to JSX elements
}

function fetchRestaurant(restaurant) {
    return {
	type: FETCH_RESTAURANT,
	restaurant
    };
}

function restReducer(state = [], action) {
    switch(action.type) {
    case FETCH_RESTAURANT:
	return action.restaurant; //RETURNS THE RESTAURANT
    default:
	return state;
    }
}


export default restReducer;
