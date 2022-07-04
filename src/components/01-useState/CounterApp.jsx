import React, { useState } from "react";

export const CounterApp = () => {
  const [conunt, setCount] = useState({
    conut1: 10,
    conut2: 20,
    conut3: 30,
  });
  const { conut1, conut2, conut3 } = conunt;
  return (
    <>
      <h1>Counter:{conut1}</h1>
      <h1>Counter:{conut2}</h1>
      <h1>Counter:{conut3}</h1>

      <hr />

      <button
        className="btn"
        onClick={() => setCount({ ...conunt, conut1: conut1 + 1 })}
      >
        +1
      </button>
      <button
        className="btn"
        onClick={() => setCount({ ...conunt, conut2: conut2 - 1 })}
      >
        -1
      </button>
      <button
        className="btn"
        onClick={() => setCount({ conut1: 10, conut2: 20, conut3: 30 })}
      >
        restart
      </button>
    </>
  );
};
