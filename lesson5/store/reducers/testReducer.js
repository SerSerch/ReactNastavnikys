import {
  getUserAction,
} from 'types/userTypes';

const initialState = {
  isLogined: false,
  name: 'GeekBraince',
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case getUserAction.toString():
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