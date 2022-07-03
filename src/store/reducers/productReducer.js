// ACTION TYPES
import {
  GET_PRODUCT_INIT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  product: null,
  isPending: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_INIT:
      return {
        ...state, isPending: true, error: null, product: null,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state, isPending: false, error: null, product: action.payload,
      };
    case GET_PRODUCT_FAILURE:
      return {
        ...state, isPending: false, error: action.payload, product: null,
      };
    default:
      return { ...state };
  }
};

export default productReducer;
