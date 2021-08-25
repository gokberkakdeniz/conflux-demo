import { ContextState } from "../types";

export const AUTH_LOGIN_START = "auth/login/start";
export const AUTH_LOGIN_SUCCESS = "auth/login/success";
export const AUTH_LOGIN_FAIL = "auth/login/fail";
export const AUTH_LOGOUT = "auth/logout";

export type LoginAction = {
  type: typeof AUTH_LOGIN_START;
  payload: {
    username: string;
    password: string;
  };
};

export type LoginSuccessAction = {
  type: typeof AUTH_LOGIN_SUCCESS;
  payload: {
    token: string;
  };
};

export type LoginFailAction = {
  type: typeof AUTH_LOGIN_FAIL;
  error: string;
};

export type LogoutAction = {
  type: typeof AUTH_LOGOUT;
};

export type AuthAction =
  | LoginAction
  | LoginSuccessAction
  | LoginFailAction
  | LogoutAction;

export type AuthState = ContextState<
  AuthAction,
  | {
      loggedIn: false;
      token: undefined;
      error?: string;
    }
  | {
      token: string;
      loggedIn: true;
      error: undefined;
    }
>;
