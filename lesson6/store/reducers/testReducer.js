import {
  TEST_GET_USER,
} from 'types/userTypes';

const initialState = {
  isLogined: false,
  name: 'GeekBraince',
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    // название обработчика события
    case TEST_GET_USER:
      console.log('Reducer getUserTest', action);
      // обязательно возвращаем новый объект
      return {
        ...state,
        isLogined: !!action.payload.id,
        ...action.payload,
      }
    default:
      return state;
  }
}

export default testReducer;
