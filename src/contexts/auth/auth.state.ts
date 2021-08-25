import { noop } from "../utils";
import { AuthState } from "./auth.types";

const state: AuthState = {
  loggedIn: false,
  token: undefined,
  error: undefined,
  dispatch: noop,
};

export default state;
