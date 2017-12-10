import {
  LOGGED_IN_SUCCESS,
  PASSWORD_ERROR,
  USER_NOT_FOUND,
  LOGGING_IN
} from './constants';

const initialState = {
  isLoggedin: false,
  userName: '',
  errorMessage: '',
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGGING_IN:
      return { state, isLoading: true };
    case LOGGED_IN_SUCCESS:
      return {
        ...state,
        isLoggedin: true,
        errorMessage: '',
        userName: action.userName,
        isLoading: false
      };
    case PASSWORD_ERROR:
      return {
        ...state,
        isLoggedin: false,
        errorMessage: 'Password or User Name is Incorrect',
        userName: '',
        isLoading: false
      };
    case USER_NOT_FOUND:
      return {
        ...state,
        isLoggedin: false,
        errorMessage: 'User Not Found',
        userName: '',
        isLoading: false
      };
    default:
      return initialState;
  }
}
