import { screen, render } from "@testing-library/react";
import Application from "./Application";

/** RTL QUERY METHODS
 * // getBy and getByAll queries
 * getByRole() - the role of the element: see options here (https://testing-library.com/docs/queries/byrole)
 * getLabelText()  - search for matching given text
 * getByPlaceholderText()  - search element with a placeholder attribute, find one that matches the given text
 * getByText() = elements that have a text matching the given text
 * getByDisplayValue() - return the element that has matching value e.i ["input", 'textarea', "select"]
 * getByAltText() - return the element that given al text e.i ["image", "input", "area"]
 * getByTitle() - element that has the matching title attribute e.i span
 * getByTestId() - element that has teh matching data-testid attribute
 * getAllBy() - returns array of all matching node for a query, and throws error if no elements match
 * TextMath() - represents a type which can be either a [string, regex, function];
 * OPTIONS: {
 * selector: type of element
 * name: inner text of label
 * level: level of heading e.i h1, h2
 * }
 * */

/* PRIORITIES */
/**
 * 1. getByRole()
 * 2. getByLabelText()
 * 3. getByPlaceholderText()
 * 4. getByText()
 * 5. getByDisplayValue()
 * 6. getByAltText()
 * 7. getByTitle()
 * 8. getByTestId()
 **/

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

    // getByAltText - options{}
    const paragraphElement = screen.getByText((content) =>
      content.startsWith("All")
    );
    expect(paragraphElement).toBeInTheDocument();

    // getByTitle (span element)
    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    // getByAltText with image element
    const imgElement = screen.getByAltText("something cute");
    expect(imgElement).toBeInTheDocument();

    //getByTestId(); (div element)
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

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
    const nameElement4 = screen.getByDisplayValue("Michael Padin");
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
