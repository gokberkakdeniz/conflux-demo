import { Effect, RootEffect } from "../types";
import {
  CounterAction,
  CounterState,
  COUNTER_INCREMENT,
  COUNTER_RESET,
  IncrementAction,
  ResetAction,
} from "./counter.types";

const onReset: Effect<ResetAction, CounterState> = (
  state,
  action,
  _dispatch
): void => {
  console.log(action, state);
};

const onIncrement: Effect<IncrementAction, CounterState> = (
  state,
  action,
  _dispatch
) => {
  console.log(action, state);
};

const rootEffect: RootEffect<CounterAction, CounterState> = {
  [COUNTER_INCREMENT]: onIncrement,
  [COUNTER_RESET]: onReset,
};

export default rootEffect;
