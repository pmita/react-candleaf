// ACTION VARIABLES
import {
  SIGN_UP_INIT,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
} from './actionTypes';

const signupInit = () => ({
  type: SIGN_UP_INIT,
});

const signUpFailure = (err) => ({
  type: SIGN_UP_FAILURE,
  payload: err,
});

const signUpSuccess = (user) => ({
  type: SIGN_UP_SUCCESS,
  payload: user,
});

export { signupInit, signUpFailure, signUpSuccess };
