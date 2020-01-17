//fetching the restaurant info -> restaurant reducer

//ACTIONS ------------------------------------------------>
const FETCH_RESTAURANT = 'FETCH_RESTAURANT';


//THUNK -------------------------------------------------->
export const fetchRestaurantThunk = () => (dispatch) => {
    //the axios.get call would go here to fetch the restaurant so that we can map them to JSX elements
}


//REDUCER FUNCTION ---------------------------------------->
function fetchRestaurant(restaurant) {
    return {
	type: FETCH_RESTAURANT,
	restaurant
    };
}


//RESTAURANT REDUCER -------------------------------------->
function restReducer(state = [], action) {
    switch(action.type) {
    case FETCH_RESTAURANT:
	return action.restaurant; //RETURNS THE RESTAURANT
    }
}

export default restReducer;
