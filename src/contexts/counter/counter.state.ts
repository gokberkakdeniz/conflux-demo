import { noop } from "../utils";
import { CounterState } from "./counter.types";

const state: CounterState = {
  value: 0,
  dispatch: noop,
};

export default state;
