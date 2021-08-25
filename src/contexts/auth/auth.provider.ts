import { createContextProvider } from "../utils";
import context from "./auth.context";
import reducer from "./auth.reducer";
import state from "./auth.state";
import effects from "./auth.effects";

const AuthContextProvider = createContextProvider(
  context,
  reducer,
  state,
  effects
);

export default AuthContextProvider;
