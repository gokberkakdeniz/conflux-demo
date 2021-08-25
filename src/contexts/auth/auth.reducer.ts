import {
  AuthAction,
  AuthState,
  AUTH_LOGIN_FAIL,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
} from "./auth.types";
import defaultState from "./auth.state";

function authReducer(
  state: AuthState = defaultState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return {
        dispatch: state.dispatch,
        loggedIn: true,
        error: undefined,
        ...action.payload,
      };
    case AUTH_LOGIN_FAIL:
      return {
        dispatch: state.dispatch,
        loggedIn: false,
        error: action.error,
        token: undefined,
      };
    case AUTH_LOGOUT:
      return { ...defaultState, dispatch: state.dispatch };
    default:
      return { ...state };
  }
}

export default authReducer;
