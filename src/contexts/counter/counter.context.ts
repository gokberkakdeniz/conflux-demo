import { createContext } from "react";
import state from "./counter.state";
import { CounterState } from "./counter.types";

const context = createContext<CounterState>(state);

context.displayName = "CounterContext";

export default context;
