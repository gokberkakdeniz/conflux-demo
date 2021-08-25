import { ContextState } from "../types";

export const COUNTER_INCREMENT = "counter/increment";
export const COUNTER_DECREMENT = "counter/decrement";
export const COUNTER_RESET = "counter/reset";
export const COUNTER_SET = "counter/set";

// export interface CounterAction extends Action {
//   type: `counter/${string}`;
// }

// export interface IncrementAction extends CounterAction {
//   type: typeof COUNTER_INCREMENT;
// }

// export interface DecrementAction extends CounterAction {
//   type: typeof COUNTER_DECREMENT;
// }

// export interface ResetAction extends CounterAction {
//   type: typeof COUNTER_RESET;
// }

// export interface SetAction extends CounterAction {
//   type: typeof COUNTER_SET;
//   payload: number;
// }

export type IncrementAction = {
  type: typeof COUNTER_INCREMENT;
};

export type DecrementAction = {
  type: typeof COUNTER_DECREMENT;
};

export type ResetAction = {
  type: typeof COUNTER_RESET;
};

export type SetAction = {
  type: typeof COUNTER_SET;
  payload: number;
};

export type CounterAction =
  | IncrementAction
  | DecrementAction
  | ResetAction
  | SetAction;

export type CounterState = ContextState<
  CounterAction,
  {
    value: number;
  }
>;
