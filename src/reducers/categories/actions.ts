import { 
  ADD_NEW_CATEGORY_REQUEST, 
  ADD_NEW_CATEGORY_FAILURE, 
  ADD_NEW_CATEGORY_SUCCESS,
  CLEAN_CATEGORY_ERROR,
  DELETE_CATEGORY_REQUEST, 
  DELETE_CATEGORY_FAILURE, 
  DELETE_CATEGORY_SUCCESS, 
  FETCH_CATEGORIES_REQUEST, 
  FETCH_CATEGORIES_SUCCESS, 
  FETCH_CATEGORIES_FAILURE, 
  IAddCategoryTypes, 
  ICategory, 
  ICleanCategoryError,
  IDeleteCategoryTypes, 
  IFetchCategoriesTypes
} from "./types";

export function addNewCategory(name: string, description: string): IAddCategoryTypes {
  return {
    type: ADD_NEW_CATEGORY_REQUEST,
    name,
    description
  }
}

export function addNewCategoryFailure(error: string): IAddCategoryTypes {
  return {
    type: ADD_NEW_CATEGORY_FAILURE,
    error
  }
}

export function addNewCategorySuccess(): IAddCategoryTypes {
  return {
    type: ADD_NEW_CATEGORY_SUCCESS
  }
}

export function cleanCategoryError(): ICleanCategoryError {
  return {
    type: CLEAN_CATEGORY_ERROR
  }
}

export function deleteCategoryRequest(id: number): IDeleteCategoryTypes {
  return {
    type: DELETE_CATEGORY_REQUEST,
    id
  }
}

export function deleteCategoryFailure(error: string): IDeleteCategoryTypes {
  return {
    type: DELETE_CATEGORY_FAILURE,
    error
  }
}

export function deleteCategorySuccess(id: number): IDeleteCategoryTypes {
  return {
    type: DELETE_CATEGORY_SUCCESS,
    id
  }
}

export function fetchCategoriesRequest(): IFetchCategoriesTypes {
  return {
    type: FETCH_CATEGORIES_REQUEST
  }
}

export function fetchCategoriesSuccess(categories: Array<ICategory>): IFetchCategoriesTypes {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    categories
  }
}

export function fetchCategoriesFailure(error: string): IFetchCategoriesTypes {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    error
  }
}