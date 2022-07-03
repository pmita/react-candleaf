import {
  GET_PRODUCT_INIT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from './actionTypes';

const getProductInit = () => ({
  type: GET_PRODUCT_INIT,
});

const getProductSuccess = (products) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: products,
});

const getProductFailure = (err) => ({
  type: GET_PRODUCT_FAILURE,
  payload: err,
});

export {
  getProductInit,
  getProductFailure,
  getProductSuccess,
};
