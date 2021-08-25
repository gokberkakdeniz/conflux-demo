import {
  CounterAction,
  CounterState,
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  COUNTER_RESET,
  COUNTER_SET,
} from "./counter.types";
import defaultState from "./counter.state";

function counterReducer(
  state: CounterState = defaultState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case COUNTER_DECREMENT:
      return { ...state, value: state.value - 1 };
    case COUNTER_INCREMENT:
      return { ...state, value: state.value + 1 };
    case COUNTER_SET:
      return { ...state, value: action.payload };
    case COUNTER_RESET:
      return { ...state, value: 0 };
    default:
      return { ...state };
  }
}

export default counterReducer;
