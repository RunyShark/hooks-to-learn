import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/components/hooks";

describe("Test in useFrom", () => {
  test("initial useFrom must be in obj", () => {
    const { result } = renderHook(() => useForm());
    expect(result.current.formState).toEqual({});
  });
  test("Form must have the same structure { name: sergio } ", () => {
    const { result } = renderHook(() => useForm({ name: "sergio" }));
    expect(result.current.formState).toEqual({ name: "sergio" });
  });
  test("Must change state the formState", () => {
    const { result } = renderHook(() => useForm({ name: "" }));
    const { handleOnChange } = result.current;
    act(() => {
      handleOnChange({ name: "sergio" });
    });
    expect(result.current.formState).toEqual({ name: "sergio" });
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
