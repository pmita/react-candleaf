/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// REDUCERS
import allReducers from './reducers';

// eslint-disable-next-line max-len
const composeEnhancer = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose;

const myStore = createStore(
  allReducers,
  compose(applyMiddleware(thunk), composeEnhancer),
);

export default myStore;
