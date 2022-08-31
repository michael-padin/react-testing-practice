/**
 * TEST DRIVEN DEVELOPMENT - write test before writing the coe: red to green
 * Greet should render the text hello and if a name is passed into the component
 * it should render hello followed by the name
 * */

import { render, screen } from "@testing-library/react";
import Greet from "./Greet";


/**
 * describe - group test 
 *  - possible to nest
 *  - possible to make multiple describe in 1 file
 * */
describe("Greet", () => {
   test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Greet/);
    expect(textElement).toBeInTheDocument();
  });

  /**
   * "FILTERING TEST IN JEST"
   * test.only() || fit - run specific tests
   * test.skip() || xit - skip in the test document
   * */
  test("renders with a name", () => {
    render(<Greet name="Michael" />);
    const textElement = screen.getByText("Greet Michael");
    expect(textElement).toBeInTheDocument();
  });
});
