import React from "react";
import {
  decrement,
  increment,
  reset,
  set,
} from "../../contexts/counter/counter.actions";
import { useCounter } from "../../contexts/counter";
import Title from "../Title";

const CounterDemo = (): JSX.Element => {
  const [{ value }, dispatch] = useCounter();

  return (
    <div className="component">
      <Title name="CounterDemo" />

      <p>
        <i>value</i> is {value}.
      </p>

      <div style={{ display: "inline-block" }}>
        <button type="button" onClick={() => dispatch(decrement())}>
          -
        </button>
        <button type="button" onClick={() => dispatch(increment())}>
          +
        </button>
        <button type="button" onClick={() => dispatch(reset())}>
          reset
        </button>
        <button
          type="button"
          onClick={() => dispatch(set(Math.floor(100 * Math.random())))}
        >
          random
        </button>
      </div>
    </div>
  );
};

export default CounterDemo;
