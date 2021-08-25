import { Effect, RootEffect } from "../types";
import {
  AuthAction,
  AuthState,
  AUTH_LOGIN_START,
  LoginAction,
} from "./auth.types";
import api from "../../api";
import { loginFail, loginSuccess } from "./auth.actions";

const onLogin: Effect<LoginAction, AuthState> = (
  _state,
  action,
  dispatch
): void => {
  const { username, password } = action.payload;

  api.login(username, password).then((res) => {
    if ("token" in res) dispatch(loginSuccess(res.token));
    else if ("error" in res) dispatch(loginFail(res.error));
  });
};

const rootEffect: RootEffect<AuthAction, AuthState> = {
  [AUTH_LOGIN_START]: onLogin,
};

export default rootEffect;
