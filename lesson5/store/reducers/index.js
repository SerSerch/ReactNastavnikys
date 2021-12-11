import { combineReducers } from 'redux';

import userReducer from './usersReducer';
import testReducer from './testReducer';

export default combineReducers({
  user: userReducer,
  test: testReducer,
});