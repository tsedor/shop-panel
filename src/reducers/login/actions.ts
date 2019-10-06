import { ILoginActionTypes, LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from './types';

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