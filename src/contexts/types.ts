/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from "react";

export type Action = { type: string; payload?: unknown; error?: unknown };

export type State = { [K: string]: any };

export type ContextState<A extends Action, S extends State> = S & {
  dispatch: Dispatch<A>;
};

export type ContextTuple<S extends { dispatch: Dispatch<any> }> = [
  Omit<S, "dispatch">,
  S["dispatch"]
];

export type Effect<A extends Action, S extends State> = (
  state: Omit<S, "dispatch">,
  action: A,
  dispatch: S["dispatch"]
) => void;

export type RootEffect<A extends Action, S extends State> = Partial<
  { [T in A["type"]]: Effect<A & { type: T }, S> }
>;

export type Reducer<A extends Action, S extends State> = (
  state: S,
  action: A
) => S;
