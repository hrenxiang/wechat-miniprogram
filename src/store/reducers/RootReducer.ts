// rootReducer.js
import { combineReducers } from 'redux';
import FooterReducer from './FooterReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
  footer: FooterReducer,
  user: UserReducer
  // 其他reducer
});

export type IRootState = ReturnType<typeof rootReducer>; 

export default rootReducer;