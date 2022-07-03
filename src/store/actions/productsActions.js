// ACTION TYPES
import {
  GET_PRODUCTS_INIT,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from './actionTypes';

const getProductsInit = () => ({
  type: GET_PRODUCTS_INIT,
});

const getProductsSucess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

const getProductsFailure = (err) => ({
  type: GET_PRODUCTS_FAILURE,
  payload: err,
});

export {
  getProductsInit,
  getProductsFailure,
  getProductsSucess,
};
