import { createContext } from "react";
import state from "./auth.state";
import { AuthState } from "./auth.types";

const context = createContext<AuthState>(state);

context.displayName = "AuthContext";

export default context;
