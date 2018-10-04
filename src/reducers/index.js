import { combineReducers } from 'redux';

import User from './user';
import Cards from './cards';

export default combineReducers({
  Cards,
  User
});