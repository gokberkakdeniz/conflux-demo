/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Context,
  createElement,
  Dispatch,
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";
import {
  Action,
  ContextState,
  ContextTuple,
  Reducer,
  RootEffect,
  State,
} from "./types";

export const noop = <T extends any[]>(..._: T): void => {};

export const createContextProvider = <
  A extends Action,
  S extends ContextState<A, State>
>(
  context: Context<S>,
  reducer: Reducer<A, S>,
  defaultState: S,
  effects: RootEffect<A, S> = {}
): FunctionComponent<PropsWithChildren<Record<never, never>>> => {
  const name = (context.displayName || reducer.name)?.replace(
    /reducer|context/i,
    ""
  );

  const effectExist = (type: string): type is A["type"] => {
    return type in effects;
  };

  const provider = ({ children }: PropsWithChildren<Record<never, never>>) => {
    const [state, rawDispatch] = useReducer(reducer, defaultState);
    const action = useRef<A>();

    const dispatch: typeof rawDispatch = useCallback(
      (a) => {
        action.current = a;
        rawDispatch(a);
      },
      [rawDispatch]
    );

    const value = useMemo(() => ({ ...state, dispatch }), [state, dispatch]);

    useEffect(() => {
      if (!action.current || !effectExist(action.current.type)) return;

      const handler = effects[action.current.type]!;

      const { dispatch: dispatchFunction, ...actualState } = value;

      handler(actualState, action.current, dispatchFunction);
    }, [state]);

    return createElement(context.Provider, { value, children });
  };

  provider.displayName = `CreateContextProvider${name ? `_${name}` : ""}`;

  return provider;
};

export const createContextHook =
  <T extends { dispatch: Dispatch<any> }>(context: Context<T>) =>
  (): ContextTuple<T> => {
    const { dispatch, ...state } = useContext(context);

    return [state, dispatch];
  };
