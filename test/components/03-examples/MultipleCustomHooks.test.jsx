import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../../src/components";
import { useFech } from "../../../src/components/hooks/useFech";
jest.mock("../../../src/components/hooks/useFech");
describe("Test in <MultipleCustomHooks/>", () => {
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
});
