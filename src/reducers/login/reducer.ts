import { ILoginState } from "../types";
import { ILoginActionTypes, CLEAN_ERROR, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./types";

const initialState: ILoginState = {
  requested: false,
  error: '',
  loggedIn: false,
  token: '',
  refreshToken: ''
}

export function loginReducer(
  state = initialState,
  action: ILoginActionTypes
): ILoginState {
  switch (action.type) {
    case CLEAN_ERROR: 
      return {
        ...state,
        error: ''
      }
    case LOGIN_REQUEST:
      return {
        ...state,
        requested: true
      }
    case LOGIN_FAILURE: 
      return {
        ...state,
        error: action.error,
        requested: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        requested: false,
        loggedIn: true,
        token: action.token,
        refreshToken: action.refreshToken
      }
    default:
      return state;
  }
}