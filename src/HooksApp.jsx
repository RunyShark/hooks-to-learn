import {
  CounterApp,
  CounterWithCustomHooks,
  SimpleForm,
  FormWithCustomHook,
  MultipleCustomHooks,
} from "./components";
export const HooksApp = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>HooksApp</h1>
      {/* <CounterApp />
      <br />
      <br />
      <hr />
      <CounterWithCustomHooks />
      <br />
      <br />
      <hr />
      <SimpleForm />
      <br />
      <br />
      <hr />
        <FormWithCustomHook /> */}
      <MultipleCustomHooks />
    </>
  );
};
