import { CounterApp, CounterWithCustomHooks } from "./components";
export const HooksApp = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>HooksApp</h1>
      <CounterApp />

      <br />
      <br />
      <hr />
      <CounterWithCustomHooks />
    </>
  );
};
