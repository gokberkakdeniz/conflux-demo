import { createContextHook } from "../utils";
import context from "./auth.context";

// eslint-disable-next-line import/prefer-default-export
export const useAuth = createContextHook(context);
