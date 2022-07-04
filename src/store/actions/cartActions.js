const getCartInit = () => ({
  type: 'GET_CART_INIT',
});

const getCartSuccess = (items) => ({
  type: 'GET_CART_SUCCESS',
  payload: items,
});

const getCartFailure = (err) => ({
  type: 'GET_CART_FAILURE',
  payload: err,
});

export {
  getCartInit,
  getCartSuccess,
  getCartFailure,
};
