import { ICategoriesState } from "../types";
import { IFetchCategoriesTypes, ADD_NEW_CATEGORY_FAILURE, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS, DELETE_CATEGORY_REQUEST, IDeleteCategoryTypes, DELETE_CATEGORY_FAILURE, DELETE_CATEGORY_SUCCESS, ADD_NEW_CATEGORY_SUCCESS, ADD_NEW_CATEGORY_REQUEST, IAddCategoryTypes, ICleanCategoryError, CLEAN_CATEGORY_ERROR, FETCH_CATEGORIES_FAILURE } from "./types";

const initialState: ICategoriesState = {
  fetchRequested: false,
  deleteRequested: false,
  addRequested: false,
  error: '',
  categories: []
}

const categoriesReducer = (state = initialState, action: IAddCategoryTypes | ICleanCategoryError | IDeleteCategoryTypes | IFetchCategoriesTypes) => {
  switch (action.type) {
    case ADD_NEW_CATEGORY_REQUEST: 
      return {...state, addRequested: true}
    case ADD_NEW_CATEGORY_FAILURE: 
      return {...state, addRequested: false, error: action.error}
    case ADD_NEW_CATEGORY_SUCCESS: 
      return {...state, addRequested: false, error: "success"}
    case CLEAN_CATEGORY_ERROR:
      return {...state, error: ''}
    case DELETE_CATEGORY_REQUEST:
      return {...state, deleteRequested: true}
    case DELETE_CATEGORY_FAILURE:
      return {...state, deleteRequested: false}
    case DELETE_CATEGORY_SUCCESS:
      return {...state, deleteRequested: false, categories: state.categories.filter(item => action.id !== item.id)}
    case FETCH_CATEGORIES_REQUEST:
      return {...state, fetchRequested: true}
    case FETCH_CATEGORIES_FAILURE:
      return {...state, fetchRequested: false, error: action.error}
    case FETCH_CATEGORIES_SUCCESS:
      return {...state, fetchRequested: false, categories: action.categories}
    default:
      return {...state}
  }
}

export default categoriesReducer;