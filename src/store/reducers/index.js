import { combineReducers } from 'redux';
// REDUCERS
import authReducer from './authReducer';
import colorReducer from './colorReducer';
import productsReducer from './productsReducer';

const allReducers = combineReducers({
  auth: authReducer,
  products: productsReducer,
  product: productsReducer,
  color: colorReducer,
});

export default allReducers;
