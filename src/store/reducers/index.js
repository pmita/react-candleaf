import { combineReducers } from 'redux';
// REDUCERS
import authReducer from './authReducer';
import colorReducer from './colorReducer';

const allReducers = combineReducers({
  auth: authReducer,
  color: colorReducer,
});

export default allReducers;
