import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../constants/index';

const initialState = {
  success: false,
  user: '',
  errorMsg: '',
};

function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state, success: true, user: action.payload, errorMsg: '',
      };

    case LOGIN_FAIL:
      return { ...state, success: false, errorMsg: action.payload };

    default:
      return state;
  }
}

export default login;
