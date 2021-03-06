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
// CART ACTIONS
import {
  getCartInit,
  getCartSuccess,
  getCartFailure,
  addItemInit,
  addItemSuccess,
  addItemFailure,
  removeItemInit,
  removeItemSuccess,
  removeItemFailure,
  increaseItemQntInit,
  increaesItemQntSuccess,
  increaseItemQntFailure,
  decreaseItemQntInit,
  decreaseItemQntSuccess,
  decreaseItemQntFailure,
} from './actions/cartActions';

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
  dispatch(getCartInit());

  try {
    firestore.collection('users').doc(userId).collection('cart').onSnapshot((snapshot) => {
      if (snapshot.empty) {
        dispatch(getCartFailure('Empty Cart'));
        throw new Error('Empty Cart');
      } else {
        const results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data() });
        });
        dispatch(getCartSuccess(results));
      }
    });
  } catch (err) {
    dispatch(getCartFailure(err.message));
  }
};

const addItemToCart = (userId, itemId, item) => async (dispatch) => {
  dispatch(addItemInit());

  try {
    firestore.collection('users').doc(userId).collection('cart').doc(itemId)
      .set({ ...item });

    dispatch(addItemSuccess(item));
  } catch (err) {
    dispatch(addItemFailure(err.message));
  }
};

const removeItemFromCart = (userId, itemId) => async (dispatch) => {
  dispatch(removeItemInit());

  try {
    firestore.collection('users').doc(userId).collection('cart').doc(itemId)
      .delete();
    dispatch(removeItemSuccess());
  } catch (err) {
    dispatch(removeItemFailure(err.message));
  }
};

const increaseItemQnt = (userId, itemId, newQuantity) => async (dispatch) => {
  dispatch(increaseItemQntInit());

  try {
    firestore.collection('users').doc(userId).collection('cart').doc(itemId)
      .update({
        quantity: newQuantity,
      });
    dispatch(increaesItemQntSuccess());
  } catch (err) {
    dispatch(increaseItemQntFailure(err.message));
  }
};

const decreaseItemQnt = (userId, itemId, newQuantity) => async (dispatch) => {
  dispatch(decreaseItemQntInit());

  try {
    firestore.collection('users').doc(userId).collection('cart').doc(itemId)
      .update({
        quantity: newQuantity,
      });
    dispatch(decreaseItemQntSuccess());
  } catch (err) {
    dispatch(decreaseItemQntFailure(err.message));
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
  removeItemFromCart,
  increaseItemQnt,
  decreaseItemQnt,
};
