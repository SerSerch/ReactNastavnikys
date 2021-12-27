import { handleActions } from 'redux-actions';
import {
  createMessagesAction,
} from 'types/messagesTypes';

const initialState = {};

// работает так же как и через switch case

export default handleActions({
  [createMessagesAction]: (state, action) => {
    console.log('Reducer createMessages', action);
    // обязательно возвращаем новый объект
    return {
      ...state,
      [action.payload.id]: [],
    }
  },
}, initialState);
