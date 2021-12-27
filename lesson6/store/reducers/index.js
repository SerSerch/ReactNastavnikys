import { combineReducers } from 'redux';

import userReducer from './usersReducer';
import testReducer from './testReducer';
import chatsReducer from './chatsReducer';
import messagesReducer from './messagesReducer';

export default combineReducers({
  user: userReducer,
  test: testReducer,
  chats: chatsReducer,
  messages: messagesReducer,
});
