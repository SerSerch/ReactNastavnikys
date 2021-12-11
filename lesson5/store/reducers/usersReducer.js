import { handleActions } from 'redux-actions';
import {
  getUserAction,
} from 'types/userTypes';

const initialState = {
  isLogined: false,
  name: 'GeekBraince',
};

export default handleActions({
  [getUserAction]: (state, action) => ({
    ...state,
    isLogined: !!action.payload.id,
    ...action.payload,
  }),
}, initialState);