import { combineReducers } from 'redux';

import { loginReducer } from './login/reducer';
import categoriesReducer from './categories/reducer';

export const reducers = combineReducers({
  categoriesReducer,
  loginReducer
});

export type AppState = ReturnType<typeof reducers>;