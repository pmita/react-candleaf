// FIREBASE
import { auth } from '../firebase/config';
// ACTIONS
import {
  signupInit,
  signUpFailure,
  signUpSuccess,
} from './actions/authActions';

const signUpUser = (email, password, username) => async (dispatch) => {
  // reset state
  dispatch(signupInit());

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

// eslint-disable-next-line import/prefer-default-export
export { signUpUser };
