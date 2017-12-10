import { combineReducers } from 'redux';
import user from './user/reducer';
import planet from './planets/reducer';

export default combineReducers({
  user,
  planet
});
