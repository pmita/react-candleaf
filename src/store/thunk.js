// FIREBASE
import { auth, firestore } from '../firebase/config';
// ACTIONS
import {
  signUpInit,
  signUpFailure,
  signUpSuccess,
  signOutInit,
  signOutFailure,
  signOutSuccess,
  signInInit,
  signInFailure,
  signInSuccess,
} from './actions/authActions';
import {
  getProductsInit,
  getProductsFailure,
  getProductsSucess,
} from './actions/productsActions';

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

const signInUser = (email, password) => async (dispatch) => {
  // reset state
  dispatch(signInInit());

  try {
    const response = await auth.signInWithEmailAndPassword(email, password);

    if (!response.user) {
      throw new Error('Sorry, could not sign in right now');
    }

    dispatch(signInSuccess(response.user));
  } catch (err) {
    dispatch(signInFailure(err.message));
  }
};

// -------------- PRODUCTS RELATED FUNCTIONS
const getProducts = () => async (dispatch) => {
  // init firebase connection
  dispatch(getProductsInit());

  try {
    // await getCollections();
    firestore.collection('products').onSnapshot((snapshot) => {
      if (snapshot.empty) {
        dispatch(getProductsFailure('Could not fing any items right now'));
        throw new Error('Could not fing any items right now');
      } else {
        const results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        dispatch(getProductsSucess(results));
      }
    });
  } catch (err) {
    dispatch(getProductsFailure(err.message));
  }
};

export {
  signUpUser,
  signOutUser,
  signInUser,
  getProducts,
};
