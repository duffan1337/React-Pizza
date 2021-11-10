import {createStore, combineReducers, compose, applyMiddleware } from 'redux'
import filtersReducer from "./reducers/filters"
import pizzasReducer from "./reducers/pizzas"
import thunk from 'redux-thunk';
import cardReducer from './reducers/card';

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer=combineReducers({
    filters:filtersReducer, 
    pizzas:pizzasReducer,
    card: cardReducer,
});


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store; 