import { renderHook, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
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

  test("Must increment the counter", () => {
    const { result } = renderHook(() => useCounter(1));
    const { incremet } = result.current;
    act(() => {
      incremet();
    });

    expect(result.current.counter).toBe(2);
  });

  test("Must decrement the counter", () => {
    const { result } = renderHook(() => useCounter(2));
    const { decremente } = result.current;

    act(() => {
      decremente();
    });

    expect(result.current.counter).toBe(1);
  });

  test("Reset must restart the conunter", () => {
    const { result } = renderHook(() => useCounter(2));
    const { restar } = result.current;
    act(() => {
      restar();
    });

    expect(result.current.counter).toBe(0);
  });
});
