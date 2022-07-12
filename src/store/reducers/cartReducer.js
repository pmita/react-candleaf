// ACTION TYPES
import {
  GET_CART_INIT,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
  ADD_ITEM_TO_CART_INIT,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_FAILURE,
  REMOVE_CART_ITEM_INIT,
  REMOVE_CART_ITEM_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  cart: [],
  isPending: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_INIT:
    case ADD_ITEM_TO_CART_INIT:
    case REMOVE_CART_ITEM_INIT:
    case 'INCREASE_ITEM_QNT_INIT':
    case 'DECREASE_ITEM_QNT_INIT':
      return { ...state, isPending: true, error: null };
    case GET_CART_FAILURE:
      return {
        ...state, isPending: false, cart: [], error: action.payload,
      };
    case ADD_ITEM_TO_CART_FAILURE:
    case REMOVE_CART_ITEM_FAILURE:
    case 'INCREASE_ITEM_QNT_FAILURE':
    case 'DECREASE_ITEM_QNT_FAILURE':
      return {
        ...state, isPending: false, cart: [...state.cart], error: action.payload,
      };
    case GET_CART_SUCCESS:
      return {
        ...state, isPending: false, error: null, cart: action.payload,
      };
    case ADD_ITEM_TO_CART_SUCCESS:
      return {
        ...state, isPending: false, error: null, cart: [...state.cart, action.payload],
      };
    case REMOVE_CART_ITEM_SUCCESS:
    case 'INCREASE_ITEM_QNT_SUCCES':
    case 'DECREASE_ITEM_QNT_SUCCES':
      return {
        ...state, isPending: false, error: null,
      };
    default:
      return { ...state };
  }
};

export default cartReducer;
