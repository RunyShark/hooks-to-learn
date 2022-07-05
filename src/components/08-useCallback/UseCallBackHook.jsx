import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const UseCallBackHook = () => {
  const [counter, setCounter] = useState(10);
  const inCremetar = useCallback(() => {
    setCounter((value) => value + 1);
  }, []);

  return (
    <>
      <h1>
        Count: <small>{counter}</small>
      </h1>
      <hr />
      <ShowIncrement inCremente={inCremetar} />
    </>
  );
};
