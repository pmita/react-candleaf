const initialState = {
  cart: [],
  isPending: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CART_INIT':
    case 'ADD_ITEM_TO_CART_INIT':
      return { ...state, isPending: true, error: null };
    case 'GET_CART_FAILURE':
    case 'ADD_ITEM_TO_CART_FAILURE':
      return {
        ...state, isPending: false, error: action.payload,
      };
    case 'GET_CART_SUCCESS':
      return {
        ...state, isPending: false, error: null, cart: action.payload,
      };
    case 'ADD_ITEM_TO_CART_SUCCESS':
      return {
        ...state, isPending: false, error: null, cart: [...state.cart, action.payload],
      };
    default:
      return { ...state };
  }
};

export default cartReducer;
