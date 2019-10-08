import axios from'axios';
import { takeEvery, put, delay } from 'redux-saga/effects';
import { ADD_NEW_CATEGORY_REQUEST, FETCH_CATEGORIES_REQUEST, DELETE_CATEGORY_REQUEST } from '../reducers/categories/types';
import { toggleAddCategoryModal } from '../reducers/ui/actions';
import { fetchCategoriesRequest ,fetchCategoriesSuccess, deleteCategorySuccess, addNewCategorySuccess, addNewCategoryFailure, cleanCategoryError, fetchCategoriesFailure } from '../reducers/categories/actions';

export function* watchForAddNewCategoryRequest() {
  yield takeEvery(ADD_NEW_CATEGORY_REQUEST, addNewCategory);
}

function* addNewCategory(action: any) {
  const response = yield axios.put('http://localhost:3500/api/categories', {name: action.name, description: action.description}, {headers: {header1: 'Bearer'}});
  if (response.data.message === "ok") {
    yield put(addNewCategorySuccess());
    yield put(toggleAddCategoryModal());
    yield put(cleanCategoryError());
    yield put(fetchCategoriesRequest());
  } else {
    yield put(addNewCategoryFailure(response.data.error));
    yield put(cleanCategoryError());
  }
}

export function* watchForDeleteCategory() {
  yield takeEvery(DELETE_CATEGORY_REQUEST, removeCategory);
}

function* removeCategory(action: any) {
  const response = yield axios.delete(`http://localhost:3500/api/categories/${action.id}`, {headers: {header1: 'Bearer'}});
  if (response.data.message === "ok") {
    yield put(deleteCategorySuccess(action.id))
  }
}

export function* watchForCategoriesRequest() {
  yield takeEvery(FETCH_CATEGORIES_REQUEST, fetchCategories);
}

function* fetchCategories() {
  const response = yield axios.get('http://localhost:3500/api/categories', {headers: {header1: 'Bearer'}})
  if (response.data.message === "ok") {
    yield delay(2000);
    yield put(fetchCategoriesSuccess(response.data.categories));
  } else {
    yield put(fetchCategoriesFailure(`Błąd pobierania kategorii - trwa ponawianie`));
    yield put(cleanCategoryError());
    yield delay(10000);
    yield put(fetchCategoriesRequest());
  }
}