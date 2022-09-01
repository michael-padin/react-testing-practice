import { screen, render } from "@testing-library/react";
import Application from "./Application";

/**   QUERY METHODS
 * getByRole() - the role of the element: see options here (https://testing-library.com/docs/queries/byrole)
 * getLabelText()  - search for matching given text
 * getByPlaceholderText()  - search element with a placeholder attribute, find one that matches the given text
 * getByText() = elements that have a text matching the given text
 * getByDisplayValue() - return the element that has matching value e.i ["input", 'textarea', "select"]
 * getByAltText() - return the element that given al text e.i ["image", "input", "area"]
 *
 * OPTIONS: {
 * selector: type of element
 * name: inner text of label
 * level: level of heading e.i h1, h2
 *
 * }
 * */

describe("Application", () => {
  it("should render", () => {
    render(<Application />);

    // getByRole h1
    const pageHeading = screen.getByRole("heading", {
      name: "Job Application Form",
    });
    expect(pageHeading).toBeInTheDocument();

    // getByRole h2
    const sectionHeading = screen.getByRole("heading", { name: "Section 1" });
    expect(sectionHeading).toBeInTheDocument();

    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    // getByAltText with image element
    const imgElement = screen.getByAltText("something cute")
    expect(imgElement).toBeInTheDocument();

    /*========================================================================*/
    // NAME INPUT ELEMENT
    // getByRole
    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    // getByLabelText
    const nameElement2 = screen.getByLabelText("Name", { selector: "input" });
    expect(nameElement2).toBeInTheDocument();

    // getByPlaceholderText
    const nameElement3 = screen.getByPlaceholderText("Full name");
    expect(nameElement3).toBeInTheDocument();

    // getByDisplayValue()
    const nameElement4 = screen.getByDisplayValue('Michael Padin');
    expect(nameElement4).toBeInTheDocument();

    //
    /*========================================================================*/

    /*========================================================================*/
    // TEXTAREA ELEMENT
    // getByRole
    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();
    /*========================================================================*/

    /*========================================================================*/
    // SELECT ELEMENT
    // getByRole
    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();
    /*========================================================================*/

    /*========================================================================*/
    // CHECK BOX
    // getByRole
    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();
    // getByLabelText
    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();
    /*========================================================================*/

    /*========================================================================*/
    //button element
    // getByRole
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
    /*========================================================================*/
  });
});
