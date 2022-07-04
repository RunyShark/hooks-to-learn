import React, { useState } from "react";

export const CounterApp = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Counter:{count}</h1>

      <hr />

      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>restart</button>
    </>
  );
};
