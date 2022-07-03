import { combineReducers } from 'redux';
// REDUCERS
import authReducer from './authReducer';
import colorReducer from './colorReducer';
import productsReducer from './productsReducer';
import productReducer from './productReducer';

const allReducers = combineReducers({
  auth: authReducer,
  products: productsReducer,
  product: productReducer,
  color: colorReducer,
});

export default allReducers;
