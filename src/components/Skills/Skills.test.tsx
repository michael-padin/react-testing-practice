import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "Javascript"];
  it("should render correctly", () => {
    // skills props
    render(<Skills skills={skills} />);

    // ul element
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  // list item element
  it("should a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElement = screen.getAllByRole("listitem");
    expect(listItemElement).toHaveLength(skills.length);
  });
});
