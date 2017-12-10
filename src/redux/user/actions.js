import * as api from '../api';
import {
  LOGGED_IN_SUCCESS,
  PASSWORD_ERROR,
  USER_NOT_FOUND,
  LOGGING_IN,
  LOGOUT
} from './constants';
import events from './../../utils/events';

export const logout = () => {
  return (dispatch, getState) => {
    dispatch({ type: LOGOUT });
    events.emit('logout');
  };
};
export const noUserFound = () => {
  return {
    type: USER_NOT_FOUND
  };
};

export const passwordIsWrong = () => {
  return {
    type: PASSWORD_ERROR
  };
};

export const loggedInSuccess = userName => {
  return {
    type: LOGGED_IN_SUCCESS,
    userName
  };
};

export const logginIn = () => {
  return {
    type: LOGGING_IN
  };
};

export const authenticate = (username, password) => {
  return (dispatch, getState) => {
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
