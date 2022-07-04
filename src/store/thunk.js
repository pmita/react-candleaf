// FIREBASE
import { auth, firestore } from '../firebase/config';
// AUTHENTICATION ACTIONS
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
// PRODUCTS ACTIONS
import {
  getProductsInit,
  getProductsFailure,
  getProductsSucess,
} from './actions/productsActions';
// PRODUCT ACTIONS
import {
  getProductInit,
  getProductFailure,
  getProductSuccess,
} from './actions/productActions';

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

    await firestore.collection('users').doc(response.user.uid).set({
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
    firestore.collection('products').onSnapshot((snapshot) => {
      if (snapshot.empty) {
        dispatch(getProductsFailure('Could not find any items right now'));
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

// -------------- PRODUCT RELATED FUNCTIONS
const getProduct = (id) => async (dispatch) => {
  // init firestore fetching
  dispatch(getProductInit());

  try {
    firestore.collection('products').doc(id).onSnapshot((snapshot) => {
      if (!snapshot.exists) {
        dispatch(getProductFailure('Could not find the item right now'));
        throw new Error('Could not find the item right now');
      } else {
        dispatch(getProductSuccess({ ...snapshot.data(), id: snapshot.id }));
      }
    });
  } catch (err) {
    dispatch(getProductFailure(err.message));
  }
};

// -------------- CART RELATED FUNCTIONS
const getCartItems = (userId) => async (dispatch) => {
  // init firestore fetching
  dispatch({ type: 'GET_CART_INIT' });

  try {
    firestore.collection('users').doc(userId).collection('cart').onSnapshot((snapshot) => {
      if (snapshot.empty) {
        dispatch({ type: 'GET_CART_FAILURE', payload: 'Empty Cart' });
        throw new Error('Empty Cart');
      } else {
        const results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data() });
        });
        dispatch({ type: 'GET_CART_SUCCESS', payload: results });
      }
    });
  } catch (err) {
    dispatch({ type: 'GET_CART_FAILURE', payload: err.message });
  }
};

const addItemToCart = (userId, itemId, item) => async (dispatch) => {
  dispatch({ type: 'ADD_ITEM_TO_CART_INIT' });

  try {
    firestore.collection('users').doc(userId).collection('cart').doc(itemId)
      .set({ ...item });

    dispatch({ type: 'ADD_ITEM_TO_CART_SUCCESS', payload: item });
  } catch (err) {
    dispatch({ type: 'ADD_ITEM_TO_CART_FAILURE', payload: err.message });
  }
};

export {
  signUpUser,
  signOutUser,
  signInUser,
  getProducts,
  getProduct,
  getCartItems,
  addItemToCart,
};
