import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/components/hooks";

describe("Test in useFrom", () => {
  const initailFrom = {
    name: "Sergio",
    age: 23,
  };

  test("Must return default values", () => {
    const { result } = renderHook(() => useForm());
    expect(result.current.formState).toEqual({});
  });
  test("Form must have the same structure { name: sergio } ", () => {
    const { result } = renderHook(() => useForm(initailFrom));

    expect(result.current).toEqual({
      formState: initailFrom,
      name: initailFrom.name,
      age: initailFrom.age,
      handleOnChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });
  test("Must change state the formState", () => {
    const newValue = "Dario";
    const { result } = renderHook(() => useForm({ initailFrom }));
    const { handleOnChange } = result.current;
    act(() => {
      handleOnChange({ target: { name: "name", value: newValue } });
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });
  test("Must restar state = {}", () => {
    const { result } = renderHook(() => useForm({ name: "" }));
    const { onResetForm } = result.current;
    act(() => {
      onResetForm();
    });
    expect(result.current.formState).toEqual({ name: "" });
  });
});
