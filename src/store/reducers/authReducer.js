const initialState = {
  user: null,
  isPending: false,
  error: null,
  authIsReady: false,
};

// eslint-disable-next-line default-param-last
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP_INIT':
    case 'SIGN_OUT_INIT':
      return { ...state, isPending: true, error: null };
    case 'SIGN_UP_SUCCESS':
      return {
        ...state, isPending: false, error: null, user: action.payload,
      };
    case 'SIGN_OUT_SUCCESS':
      return {
        ...state, isPending: false, error: null, user: null,
      };
    case 'SIGN_UP_FAILURE':
    case 'SIGN_OUT_FAILURE':
      return { ...state, isPending: false, error: action.payload };
    default:
      return { ...state };
  }
};

export default authReducer;
