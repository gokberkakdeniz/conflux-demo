import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  COUNTER_RESET,
  COUNTER_SET,
  DecrementAction,
  IncrementAction,
  ResetAction,
  SetAction,
} from "./counter.types";

export const increment = (): IncrementAction => ({
  type: COUNTER_INCREMENT,
});

export const decrement = (): DecrementAction => ({
  type: COUNTER_DECREMENT,
});

export const reset = (): ResetAction => ({
  type: COUNTER_RESET,
});

export const set = (value: number): SetAction => ({
  type: COUNTER_SET,
  payload: value,
});
