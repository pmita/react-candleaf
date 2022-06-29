// FIREBASE
import { auth } from '../firebase/config';
// ACTIONS
import {
  signUpInit,
  signUpFailure,
  signUpSuccess,
  signOutInit,
  signOutFailure,
  signOutSuccess,
} from './actions/authActions';

const signUpUser = (email, password, username) => async (dispatch) => {
  // reset state
  dispatch(signUpInit());

  try {
    const response = await auth.createUserWithEmailAndPassword(email, password);

    if (!response.user) {
      throw new Error('Sorry, could not sign up right now');
    }

    await response.user.updateProfile({
      displayName: username,
    });

    dispatch(signUpSuccess(response.user));
  } catch (err) {
    dispatch(signUpFailure(err.message));
  }
};

const signOutUser = () => async (dispatch) => {
  // reset state
  dispatch(signOutInit());

  try {
    await auth.signOut();

    dispatch(signOutSuccess());
  } catch (err) {
    dispatch(signOutFailure(err.message));
  }
};

// eslint-disable-next-line import/prefer-default-export
export { signUpUser, signOutUser };
