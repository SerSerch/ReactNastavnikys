import {
  getUserAction,
  TEST_GET_USER,
} from 'types/userTypes';

// под капотом getUserAction возвращает тоже самое
export const getUserTestAction = (data) => ({
  type: TEST_GET_USER,
  payload: data,
})

export const getUser = (id) => (dispatch) => {
  console.log('Middleware getUser', id);

  fetch(`/api/users/${id}`)
    .then(res => res.json())
    .then(user => {
      if (user.id) {
        // в dispatch передается объект с type и payload
        // затем этот объект получает reducer и обрабатывается
        dispatch(getUserAction(user));
      }
    })
    .catch(error => {
      console.warn('возможно не запущен json-server')
      console.error('getUser error', error)
    });
};

export const getUserTest = (id) => (dispatch) => {
  console.log('Middleware getUserTest', id);

  fetch(`/api/users/${id}`)
    .then(res => res.json())
    .then(user => {
      if (user.id) {
        // в dispatch передается объект с type и payload
        // затем этот объект получает reducer и обрабатывается
        dispatch(getUserTestAction(user));
      }
    })
    .catch(error => {
      console.warn('возможно не запущен json-server')
      console.error('getUser error', error)
    });
}
