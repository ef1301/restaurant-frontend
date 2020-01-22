import axios from 'axios';
//fetching the entire menu -> menu reducer

const FETCH_MENU = 'FETCH_MENU';

export const fetchMenuThunk = () => (dispatch) => {
    //the axios.get call would go here to fetch the menu so that we can map them to JSX elements
    axios.get("https://bytemee.herokuapp.com/api/menu") 
        .then(response => response.data)
        .then(menu => dispatch(fetchMenu(menu)))
        .catch(err => console.log(err));
    }

function fetchMenu(menu) {
    return {
	type: FETCH_MENU,
	menu
    }
}

function menuReducer(state = [], action) {
    switch(action.type) {
    case FETCH_MENU:
	action.menu.forEach( element => element.quantity = 0);
        return action.menu;
    default:
	return state;
    }
}

export default menuReducer;
