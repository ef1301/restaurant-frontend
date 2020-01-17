//fetching the entire menu -> menu reducer

const FETCH_MENU = 'FETCH_MENU';

//THUNK ------------------------------------------------>
export const fetchMenuThunk = () => (dispatch) => {
    //the axios.get call would go here to fetch the menu so that we can map them to JSX elements
}

//REDUCER FUNCTION ------------------------------------->
function fetchMenu(menu) {
    return {
	type: FETCH_MENU,
	menu
    }
}

//MENU REDUCER ----------------------------------------->
function menuReducer(state = [], action) {
    switch(action.type) {
    case FETCH_MENU:
	return action.menu;
    default:
	return state;
    }
}

export default menuReducer;
