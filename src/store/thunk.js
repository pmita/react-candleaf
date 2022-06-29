// FIREBASE
import { auth } from '../firebase/config';

const signUpUser = (email, password, username) => async (dispatch) => {
  // reset state
  dispatch({ type: 'SIGN_UP_INIT' });

  try {
    const response = await auth.createUserWithEmailAndPassword(email, password);

    if (!response.user) {
      throw new Error('Sorry, could not sign up right now');
    }

    await response.user.updateProfile({
      displayName: username,
    });

    dispatch({ type: 'SIGN_UP_SUCCESS', payload: response.user });
  } catch (err) {
    dispatch({ type: 'SIGN_UP_FAILURE', payload: err.message });
  }
};

// eslint-disable-next-line import/prefer-default-export
export { signUpUser };
