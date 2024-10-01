import filterReducer from '../reducers/filters';
import pizzasReducer from '../reducers/pizzas';  
import {combineReducers } from 'redux';

const rootReducer = combineReducers({
  filter: filterReducer,
  pizzas: pizzasReducer

});

export default rootReducer;
