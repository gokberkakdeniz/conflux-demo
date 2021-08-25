import {
  AUTH_LOGIN_FAIL,
  AUTH_LOGIN_START,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  LoginAction,
  LoginFailAction,
  LoginSuccessAction,
  LogoutAction,
} from "./auth.types";

export const login = (username: string, password: string): LoginAction => ({
  type: AUTH_LOGIN_START,
  payload: { username, password },
});

export const loginFail = (error: string): LoginFailAction => ({
  type: AUTH_LOGIN_FAIL,
  error,
});

export const loginSuccess = (token: string): LoginSuccessAction => ({
  type: AUTH_LOGIN_SUCCESS,
  payload: {
    token,
  },
});

export const logout = (): LogoutAction => ({
  type: AUTH_LOGOUT,
});
