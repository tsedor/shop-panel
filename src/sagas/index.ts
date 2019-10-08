import { all, fork } from 'redux-saga/effects';

import { watchForLoginRequest } from './login';
import { watchForAddNewCategoryRequest, watchForCategoriesRequest, watchForDeleteCategory } from './categories';

export const rootSaga = function* root() {
  yield all([
    fork(watchForLoginRequest),
    fork(watchForAddNewCategoryRequest),
    fork(watchForCategoriesRequest),
    fork(watchForDeleteCategory)
  ])
}