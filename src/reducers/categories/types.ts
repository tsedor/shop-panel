export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_REQUEST_FAILURE = 'FETCH_CATEGORIES_REQUEST_FAILURE';
export const FETCH_CATEGORIES_REQUEST_SUCCESS = 'FETCH_CATEGORIES_REQUEST_SUCCESS';

export interface iCategory {
  id: number,
  name: string,
  description: string,
  parentId: number
}

export interface IFetchCategoriesRequest {
  type: typeof FETCH_CATEGORIES_REQUEST
}

interface IFetchCategoriesFailure {
  type: typeof FETCH_CATEGORIES_REQUEST_FAILURE,
  error: string
}

interface IFetchCategoriesSuccess {
  type: typeof FETCH_CATEGORIES_REQUEST_SUCCESS,
  categories: Array<iCategory>
}

export type ICategoriesRequestTypes = IFetchCategoriesRequest | IFetchCategoriesSuccess | IFetchCategoriesFailure;