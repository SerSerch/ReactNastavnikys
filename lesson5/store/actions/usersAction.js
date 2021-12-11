import {
  getUserAction,
} from 'types/userTypes';

export const getUser = (id) => (dispatch) => {
  fetch(`/api/users/${id}`)
    .then(res => res.json())
    .then(user => {
      if (user.id) {
        dispatch(getUserAction(user));
      }
    })
    .catch(error => {
      console.warn('возможно не запущен json-server')
      console.error('getUser error', error)
    });
};