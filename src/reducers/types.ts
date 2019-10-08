import { ICategory } from "./categories/types";

export interface ICategoriesState {
  fetchRequested: boolean,
  deleteRequested: boolean,
  addRequested: boolean,
  error: string,
  categories: Array<ICategory>
}

export interface ILoginState {
  requested: boolean,
  error: string,
  loggedIn: boolean,
  token: string,
  refreshToken: string
}

export interface IUIState {
  showAddCategoryModal: boolean
}