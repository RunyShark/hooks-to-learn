import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../../src/components";
describe("Test in <MultipleCustomHooks/>", () => {
  test("Must to show the component for default", () => {
    render(<MultipleCustomHooks />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText("BreakingBad Qoutes"));
  });
});
