import { iCategory } from "./categories/types";

export interface ICategoriesState {
  requested: boolean,
  error: string,
  categories: Array<iCategory>
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