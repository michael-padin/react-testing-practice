import React from "react";

const Application = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <img src= "https://source.unsplash.com/random/300x300" alt = "something cute"/>
      <form onSubmit={handleSubmit}>
        {/* NAME INPUT ELEMENT */}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="jobName"
            placeholder="Full name"
            defaultValue={"Michael Padin"}
            onChange={handleChange}
          />
        </div>
        <div>
          {/* textarea */}
          <div>
            <label htmlFor="bio">Bio</label>
            <textarea id="bio" name="bio"></textarea>
          </div>

          {/* Select element */}
          <label htmlFor="job-location">Job Location</label>
          <select name="job" id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>

        {/* Checkbox element */}
        <div>
          <label htmlFor="terms">
            <input type="checkbox" id="terms" />I agree to the terms and
            conditions
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Application;
