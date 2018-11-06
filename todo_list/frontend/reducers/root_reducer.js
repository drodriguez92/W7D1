import todos from './todos_reducer';
import errors from './error_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  todos,
  errors
});
