import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
} from '../constants/index';

function login(username, password) {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
    });
    if (username === 'Admin' && password === '12345') {
      dispatch({
        type: LOGIN_SUCCESS,
      });
    } else {
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };
}

export default login;
