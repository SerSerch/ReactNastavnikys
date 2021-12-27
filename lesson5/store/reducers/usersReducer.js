import { handleActions } from 'redux-actions';
import {
  getUserAction,
} from 'types/userTypes';

const initialState = {
  isLogined: false,
  name: 'GeekBraince',
};

// работает так же как и через switch case

export default handleActions({
  // название обработчика события
  // под капотом вызывается getUserAction.toString()
  // что бы название преобразовалось в строку
  [getUserAction]: (state, action) => {
    console.log('Reducer getUser', action);
    // обязательно возвращаем новый объект
    return {
      ...state,
      isLogined: !!action.payload.id,
      ...action.payload,
    }
  },
}, initialState);
