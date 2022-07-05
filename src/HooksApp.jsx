import {
  CounterApp,
  CounterWithCustomHooks,
  SimpleForm,
  FormWithCustomHook,
  MultipleCustomHooks,
  FocusScreen,
  Layout,
  Memorize,
  MemoHook,
  UseCallBackHook,
  Padre,
  TodoApp,
} from "./components";
export const HooksApp = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>HooksApp</h1>
      {/* 
      <CounterApp />
      <CounterWithCustomHooks />
      <SimpleForm />
      <FormWithCustomHook /> 
      <MultipleCustomHooks />
      <FocusScreen />
      <Layout />
      <Memorize />
      <MemoHook />
      <UseCallBackHook />
      <Padre />
      */}

      <TodoApp />
    </>
  );
};
