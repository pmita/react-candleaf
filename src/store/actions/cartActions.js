// ACTIONS
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
} from './actionTypes';

const getCartInit = () => ({
  type: GET_CART_INIT,
});

const getCartSuccess = (items) => ({
  type: GET_CART_SUCCESS,
  payload: items,
});

const getCartFailure = (err) => ({
  type: GET_CART_FAILURE,
  payload: err,
});

const addItemInit = () => ({
  type: ADD_ITEM_TO_CART_INIT,
});
const addItemSuccess = (item) => ({
  type: ADD_ITEM_TO_CART_SUCCESS,
  payload: item,
});
const addItemFailure = (err) => ({
  type: ADD_ITEM_TO_CART_FAILURE,
  payload: err,
});
const removeItemInit = () => ({
  type: REMOVE_CART_ITEM_INIT,
});
const removeItemSuccess = () => ({
  type: REMOVE_CART_ITEM_SUCCESS,
});
const removeItemFailure = (err) => ({
  type: REMOVE_CART_ITEM_FAILURE,
  payload: err,
});

export {
  getCartInit,
  getCartSuccess,
  getCartFailure,
  addItemInit,
  addItemSuccess,
  addItemFailure,
  removeItemInit,
  removeItemSuccess,
  removeItemFailure,
};
