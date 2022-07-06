import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/components/hooks";
describe("Test <useContext>", () => {
  test("Must return the values for defect", () => {
    const { result } = renderHook(() => useCounter());
    const { incremet, counter, decremente, restar } = result.current;

    expect(counter).toBe(1);
    expect(decremente).toEqual(expect.any(Function));
    expect(incremet).toEqual(expect.any(Function));
    expect(restar).toEqual(expect.any(Function));
  });
  test("Must generate the counter with the value of 100", () => {
    const { result } = renderHook(() => useCounter(100));
    expect(result.current.counter).toBe(100);
  });

  expect("");
});
