const initialState = {
  product: null,
  isPending: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCT_INIT':
      return {
        ...state, isPending: true, error: null, product: null,
      };
    case 'GET_PRODUCT_SUCCESS':
      return {
        ...state, isPending: false, error: null, product: action.payload,
      };
    case 'GET_PRODUCT_FAILIURE':
      return {
        ...state, isPending: false, error: action.payload, product: null,
      };
    default:
      return { ...state };
  }
};

export default productReducer;
