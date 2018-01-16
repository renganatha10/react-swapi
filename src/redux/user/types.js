//@flow

import type {
  LOGGED_IN_SUCCESS,
  PASSWORD_ERROR,
  USER_NOT_FOUND,
  LOGGING_IN,
  LOGOUT
} from './constants';

export type UserAction =
  | { type: LOGGED_IN_SUCCESS, userName: string }
  | { type: PASSWORD_ERROR }
  | { type: USER_NOT_FOUND }
  | { type: LOGGING_IN }
  | { type: LOGOUT };
