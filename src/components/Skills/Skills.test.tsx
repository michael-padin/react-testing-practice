import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  it("should render correctly", () => {
    // skills props 
    const skills = ["HTML", "CSS", "Javascript"];
    render(<Skills skills={skills} />);
    
    // list element
    const listElement = screen.getByRole("List");
    expect(listElement).toBeInTheDocument();
  });
});
