export interface ILoginState {
  requested: boolean,
  error: string,
  loggedIn: boolean,
  token: string,
  refreshToken: string
}