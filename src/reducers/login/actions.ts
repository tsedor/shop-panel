import { ILoginActionTypes, LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS, CLEAN_LOGIN_ERROR } from './types';

export function cleanLoginError(): ILoginActionTypes {
  return {
    type: CLEAN_LOGIN_ERROR
  }
}

export function loginRequest(login: string, password: string): ILoginActionTypes {
  return {
    type: LOGIN_REQUEST,
    login,
    password
  }
}

export function loginFailure(error: string): ILoginActionTypes {
  return {
    type: LOGIN_FAILURE,
    error
  }
}

export function LoginSuccess(token: string, refreshToken: string): ILoginActionTypes {
  return {
    type: LOGIN_SUCCESS,
    token,
    refreshToken
  }
}