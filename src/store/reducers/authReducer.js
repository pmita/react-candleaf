// ACTION TYPES
import {
  SIGN_UP_INIT,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_OUT_INIT,
  SIGN_OUT_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_IN_INIT,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  AUTH_IS_READY,
} from '../actions/actionTypes';

const initialState = {
  user: null,
  isPending: false,
  error: null,
  authIsReady: false,
};

// eslint-disable-next-line default-param-last
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_INIT:
    case SIGN_OUT_INIT:
    case SIGN_IN_INIT:
      return { ...state, isPending: true, error: null };
    case SIGN_UP_SUCCESS:
    case SIGN_IN_SUCCESS:
      return {
        ...state, isPending: false, error: null, user: action.payload,
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state, isPending: false, error: null, user: null,
      };
    case SIGN_UP_FAILURE:
    case SIGN_OUT_FAILURE:
    case SIGN_IN_FAILURE:
      return { ...state, isPending: false, error: action.payload };
    case AUTH_IS_READY:
      return { ...state, authIsReady: true, user: action.payload };
    default:
      return { ...state };
  }
};

export default authReducer;
