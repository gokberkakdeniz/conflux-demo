import React, { useMemo } from "react";
import { reset, useCounter } from "../../contexts/counter";
import Child from "../Child";
import Title from "../Title";
import CounterDemo from "../CounterDemo";
import Login from "../Login";

const Main = (): JSX.Element => {
  const [, dispatch] = useCounter();

  const memorized = useMemo(
    () => (
      <div className="inner component">
        <Title name="memorized node" />
        <p>
          Even if we only use{" "}
          <button
            type="button"
            className="dispatch"
            title="dispatch(reset());"
            onClick={() => dispatch(reset())}
          >
            dispatch
          </button>{" "}
          function, the re-render occurs.
          <br />
          To prevent this, this part is wrapped with useMemo.
        </p>
      </div>
    ),
    [dispatch]
  );

  return (
    <div className="component">
      <Title name="Main" />
      {memorized}
      <CounterDemo />
      <Child />
      <Login />
    </div>
  );
};

export default Main;
