import { handleActions } from 'redux-actions';
import {
  createChatAction,
} from 'types/chatsTypes';

const initialState = {};

// работает так же как и через switch case

export default handleActions({
  [createChatAction]: (state, action) => {
    console.log('Reducer createChat', action);
    // обязательно возвращаем новый объект
    return {
      ...state,
      [action.payload.id]: action.payload.data,
    }
  },
}, initialState);
