export const ADD_NEW_CATEGORY_REQUEST = 'ADD_NEW_CATEGORY_REQUEST';
export const ADD_NEW_CATEGORY_FAILURE = 'ADD_NEW_CATEGORY_FAILURE';
export const ADD_NEW_CATEGORY_SUCCESS = 'ADD_NEW_CATEGORY_SUCCESS';
export const CLEAN_CATEGORY_ERROR = 'CLEAN_CATEGORY_ERROR';
export const DELETE_CATEGORY_REQUEST = 'DELETE_CATEGORY_REQUEST';
export const DELETE_CATEGORY_FAILURE = 'DELETE_CATEGORY_FAILURE';
export const DELETE_CATEGORY_SUCCESS = 'DELETE_CATEGORY_SUCCESS';
export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';

export interface ICategory {
  id: number,
  name: string,
  description: string,
  parentId: number
}

interface IAddCategoryRequest {
  type: typeof ADD_NEW_CATEGORY_REQUEST,
  name: string,
  description: string
}

interface IAddCategoryRequestFailure {
  type: typeof ADD_NEW_CATEGORY_FAILURE,
  error: string,
}

interface IAddCategorySuccess {
  type: typeof ADD_NEW_CATEGORY_SUCCESS
}

export type IAddCategoryTypes = IAddCategoryRequest | IAddCategoryRequestFailure | IAddCategorySuccess;

export interface ICleanCategoryError {
    type: typeof CLEAN_CATEGORY_ERROR
}

export interface IDeleteCategoryRequest {
  type: typeof DELETE_CATEGORY_REQUEST,
  id: number
}

interface IDeleteCategoryFailure {
  type: typeof DELETE_CATEGORY_FAILURE,
  error: string
}

interface IDeleteCategorySuccess {
  type: typeof DELETE_CATEGORY_SUCCESS,
  id: number
}

export type IDeleteCategoryTypes = IDeleteCategoryRequest | IDeleteCategoryFailure | IDeleteCategorySuccess;

export interface IFetchCategoriesRequest {
  type: typeof FETCH_CATEGORIES_REQUEST
}

interface IFetchCategoriesFailure {
  type: typeof FETCH_CATEGORIES_FAILURE,
  error: string
}

interface IFetchCategoriesSuccess {
  type: typeof FETCH_CATEGORIES_SUCCESS,
  categories: Array<ICategory>
}

export type IFetchCategoriesTypes = IFetchCategoriesRequest | IFetchCategoriesSuccess | IFetchCategoriesFailure;