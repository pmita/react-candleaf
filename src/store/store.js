/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
// REDUCERS
import allReducers from './reducers';

const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default myStore;
