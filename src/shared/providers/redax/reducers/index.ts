import { combineReducers } from 'redux';
import Settings from './Settings';

const rootReducer = combineReducers({
  Configuration: Settings,
});
export default rootReducer;
