
import userReducer from './userReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userReducerStates: userReducer,
});
export default rootReducer;
