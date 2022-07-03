// ACTIONS TYPES
import {
  GET_PRODUCTS_INIT,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  products: [],
  isPending: false,
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_INIT:
      return {
        ...state, isPending: true, error: null, products: [],
      };
    case GET_PRODUCTS_FAILURE:
      return {
        ...state, isPending: false, error: action.payload, products: [],
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state, isPending: false, error: null, products: action.payload,
      };
    default:
      return { ...state };
  }
};

export default productsReducer;
