import { default as userReducer} from "../store/utilities/userReducer";
import { default as restReducer} from "../store/utilities/restReducer";
import { default as orderReducer} from "../store/utilities/orderReducer";
import { default as menuReducer} from "../store/utilities/menuReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    users: userReducer,
    restaurants: restReducer,
    orders: orderReducer,
    menus: menuReducer
})

export default rootReducer;

