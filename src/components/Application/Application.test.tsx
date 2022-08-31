import { screen, render } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  it("should render", () => {
    render(<Application />);
    const InputElement = screen.getByRole("textbox");
    expect(InputElement).toBeInTheDocument();
  });
});
