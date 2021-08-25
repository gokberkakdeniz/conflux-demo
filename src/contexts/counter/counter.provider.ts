import { createContextProvider } from "../utils";
import context from "./counter.context";
import reducer from "./counter.reducer";
import state from "./counter.state";
import effects from "./counter.effects";

const CounterContextProvider = createContextProvider(
  context,
  reducer,
  state,
  effects
);

export default CounterContextProvider;
