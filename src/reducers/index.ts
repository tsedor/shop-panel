import { combineReducers } from 'redux';

import { loginReducer } from './login/reducer';

export const reducers = combineReducers({
  loginReducer
});

export type AppState = ReturnType<typeof reducers>;