import { combineReducers } from 'redux';

import { loginReducer } from './login/reducer';
import categoriesReducer from './categories/reducer';
import uiReducer from './ui/reducer';

export const reducers = combineReducers({
  categoriesReducer,
  loginReducer,
  uiReducer
});

export type AppState = ReturnType<typeof reducers>;
