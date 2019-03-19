import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../constants/index';

const initialState = {
  success: false,
};

function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, success: false };

    case LOGIN_SUCCESS:
      return { ...state, success: true };

    case LOGIN_FAIL:
      return { ...state, success: false };

    default:
      return state;
  }
}

export default login;
