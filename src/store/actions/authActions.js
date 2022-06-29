// ACTION VARIABLES
import {
  SIGN_UP_INIT,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_OUT_INIT,
  SIGN_OUT_FAILURE,
  SIGN_OUT_SUCCESS,
} from './actionTypes';

// -----------SIGN UP ACTIONS
const signUpInit = () => ({
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

// ------------SIGN OUT ACTIONS
const signOutInit = () => ({
  type: SIGN_OUT_INIT,
});

const signOutFailure = (err) => ({
  type: SIGN_OUT_FAILURE,
  payload: err,
});

const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});

export {
  signUpInit,
  signUpFailure,
  signUpSuccess,
  signOutInit,
  signOutFailure,
  signOutSuccess,
};
