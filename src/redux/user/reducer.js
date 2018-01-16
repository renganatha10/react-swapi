// @flow

import type { User } from './../../types';
import type { UserAction } from './types';

const initialState: User = {
  isLoggedin: false,
  userName: '',
  errorMessage: '',
  isLoading: false
};

export default function(state: User = initialState, action: UserAction): User {
  switch (action.type) {
    case 'LOGGING_IN':
      return { ...state, isLoading: true };
    case 'LOGGED_IN_SUCCESS':
      return {
        ...state,
        isLoggedin: true,
        errorMessage: '',
        userName: action.userName,
        isLoading: false
      };
    case 'PASSWORD_ERROR':
      return {
        ...state,
        isLoggedin: false,
        errorMessage: 'Password or User Name is Incorrect',
        userName: '',
        isLoading: false
      };
    case 'USER_NOT_FOUND':
      return {
        ...state,
        isLoggedin: false,
        errorMessage: 'User Not Found',
        userName: '',
        isLoading: false
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
}
