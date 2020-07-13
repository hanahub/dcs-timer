import { combineReducers } from 'redux';
import { reducer as global } from './GlobalRedux';

const reducers = combineReducers({
  global,
});

export default reducers;
