import { createContextHook } from "../utils";
import context from "./counter.context";

// eslint-disable-next-line import/prefer-default-export
export const useCounter = createContextHook(context);
