import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../constants/index';

function login(username, password) {
  console.log(username, password);
  return (dispatch) => {
    if (username === 'Admin' && password === '12345') {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: username,
      });
    } else {
      dispatch({
        type: LOGIN_FAIL,
        payload: 'Логин и пароль введены неверно, пожалуйста, попробуйте снова',
        error: true,
      });
    }
  };
}

export default login;
