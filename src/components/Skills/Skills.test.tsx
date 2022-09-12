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

  test('Start learning button is eventually displayed', async() => {
    render(<Skills skills = {skills}/>)

    // finBy -> has a default timeout of 1000 milliseconds
    // findByRole -> returns a promise the resolves when an element is found
    const startLearningButton = await screen.findByRole('button', {
      name: 'Start learning'

    },{
      // third argument -> timeout to display the element
      timeout: 2000,
    })

    expect(startLearningButton).toBeInTheDocument();

  })
});
