//Necessities and accessories for our Redux store
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import ThunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//REDUCER FUNCTIONS;
import rootReducer from '../reducers'

const logger = createLogger({collasped: true});
const middleware = composeWithDevTools(applyMiddleware(ThunkMiddleware, logger));

//create the store;
const store = createStore( rootReducer, middleware);
export default store;
