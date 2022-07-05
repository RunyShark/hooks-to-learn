import React, { useState, useMemo } from "react";
import { useCounter } from "../hooks";
import { UseMemoSmall } from "./UseMemoSmall";
import { heavyStuff } from "../";

export const MemoHook = () => {
  const { decremente, incremet, counter } = useCounter();
  const [show, setShow] = useState(true);
  const messsageMemoriza = useMemo(() => heavyStuff(counter), [counter]);
  return (
    <>
      <h1>
        Counter: <UseMemoSmall value={counter} />
      </h1>
      <hr />
      <h4>{messsageMemoriza}</h4>
      <button className="btn btn-primary" onClick={() => incremet(4000)}>
        {" "}
        +1
      </button>
      <button className="btn btn-primary" onClick={() => decremente(1)}>
        {" "}
        -1
      </button>
      <button onClick={() => setShow(!show)} className="btn">
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
