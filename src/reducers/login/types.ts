export const CLEAN_ERROR = 'CLEAN_ERROR';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

interface ICleanError {
  type: typeof CLEAN_ERROR
}

export interface ILoginRequest {
  type: typeof LOGIN_REQUEST,
  login: string,
  password: string
}

interface ILoginFailure {
  type: typeof LOGIN_FAILURE,
  error: string
}

interface ILoginSuccess {
  type: typeof LOGIN_SUCCESS,
  token: string,
  refreshToken: string
}

export type ILoginActionTypes = ILoginRequest | ILoginFailure | ILoginSuccess | ICleanError;