import React, { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
  const { decremente, incremet, counter } = useCounter();
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />

      <button className="btn btn-primary" onClick={() => incremet(1)}>
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
