// @flow
import * as api from '../api';
import events from './../../utils/events';
import type { UserAction } from './types';

type Dispatch = (action: UserAction) => void;

export const logout = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: 'LOGOUT' });
    events.emit('logout');
  };
};
export const noUserFound = (): UserAction => {
  return {
    type: 'USER_NOT_FOUND'
  };
};

export const passwordIsWrong = (): UserAction => {
  return {
    type: 'PASSWORD_ERROR'
  };
};

export const loggedInSuccess = (userName: string): UserAction => {
  return {
    type: 'LOGGED_IN_SUCCESS',
    userName
  };
};

export const logginIn = (): UserAction => {
  return {
    type: 'LOGGING_IN'
  };
};

export const authenticate = (username: string, password: string): any => {
  return (dispatch: Dispatch) => {
    dispatch(logginIn());
    api.searchPeaple(username).then(searchResponse => {
      const { results } = searchResponse;
      if (results.length > 0) {
        const currentUser = results[0];
        if (
          username !== currentUser.name ||
          currentUser.birth_year !== password
        ) {
          dispatch(noUserFound());
        } else {
          dispatch(loggedInSuccess(username));
          events.emit('pushroute', '/home/');
        }
      } else {
        dispatch(passwordIsWrong());
      }
    });
  };
};
