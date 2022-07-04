import { combineReducers } from 'redux';
// REDUCERS
import authReducer from './authReducer';
import productsReducer from './productsReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';

const allReducers = combineReducers({
  auth: authReducer,
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
});

export default allReducers;
