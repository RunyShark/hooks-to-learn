import { useCounter } from "../hooks";

export const CounterWithCustomHooks = () => {
  const { counter, incremet, restar, decremente } = useCounter();
  return (
    <>
      <h1>Counter with Hook:{counter}</h1>
      <hr />

      <button className="btn btn-primary" onClick={() => incremet(2)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={restar}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decremente()}>
        -1
      </button>
    </>
  );
};
