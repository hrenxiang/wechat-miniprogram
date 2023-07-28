// rootReducer.js
import { combineReducers } from 'redux';
import footerReducer from './footerReducer';

const rootReducer = combineReducers({
  footer: footerReducer,
    // 其他reducer
});

export type IRootState = ReturnType<typeof rootReducer>; 

export default rootReducer;