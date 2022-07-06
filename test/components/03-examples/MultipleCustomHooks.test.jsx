import { act, renderHook } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../../src/components";
import { useFech } from "../../../src/components/hooks/useFech";
import { useCounter } from "../../../src/components/hooks/useCounter";

jest.mock("../../../src/components/hooks/useFech");
jest.mock("../../../src/components/hooks/useCounter");
describe("Test in <MultipleCustomHooks/>", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });
  useFech.mockReturnValue({ data: null, isLoading: true, hasError: null });
  test("Must to show the component for default", () => {
    render(<MultipleCustomHooks />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText("BreakingBad Qoutes"));
  });
  test("Must to show in Quote", () => {
    useFech.mockReturnValue({
      data: [{ author: "Dario", quote: "Hola munde" }],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText("Hola munde")).toBeTruthy();
    expect(screen.getByText("Dario")).toBeTruthy();
  });
  test("Must increment", () => {
    useFech.mockReturnValue({
      data: [{ author: "Dario", quote: "Hola munde" }],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    const { result } = renderHook(() => useCounter());
    const nextButton = screen.getByRole("button");
    fireEvent.click(nextButton);
  });
});
