import React, { useState } from "react";
import axios from "axios";
import validator from "validator";

function CreateAccountPage() {
  const initialFormData = {
    email: "",
    username: "",
    password1: "",
    password2: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    const formIsValid = validateForm();

    if (formIsValid) {
      try {
        const response = await axios.post(
          "http://localhost:5000/auth/register",
          {
            email: formData.email,
            username: formData.username,
            password: formData.password1,
          }
        );
        alert("Successfully created account!");
        setFormData(initialFormData);
      } catch (err) {
        alert(`Error: ${err.response.data.error}`);
      }
    } else {
      alert("Invalid fields detected.");
    }
  }

  function validateForm() {
    let emailIsValid = false;
    let passwordIsValid = false;
    let usernameIsValid = false;

    if (
      formData.password1 === formData.password2 &&
      formData.password1.length >= 8
    ) {
      passwordIsValid = true;
    }

    if (!formData.username.match(/[\<\>!@#\$%^&\*,]+/i)) {
      usernameIsValid = true;
    }

    if (validator.isEmail(formData.email)) {
      emailIsValid = true;
    }

    return emailIsValid && passwordIsValid && usernameIsValid;
  }

  return (
    <section className="content-container createAccountPage p-3">
      <h2 className="text-center">Create Account</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group w-75 d-block mx-auto">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
            value={formData.email}
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group mt-3 w-75 d-block mx-auto">
          <label htmlFor="username" className="form-label">
            Username ( minimum 4 characters, only containing letters and _ )
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
            aria-describedby="usernameHelp"
            placeholder="Enter username"
            minLength={4}
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group mt-3 w-75 d-block mx-auto">
          <label htmlFor="password1" className="form-label">
            Enter Password (minimum 8 characters)
          </label>
          <input
            type="password"
            className="form-control"
            name="password1"
            id="password1"
            aria-describedby="password1Help"
            placeholder="Enter password"
            required
            minLength={8}
            onChange={handleInputChange}
            value={formData.password1}
          />
        </div>

        <div className="form-group mt-3 w-75 d-block mx-auto">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password2"
            id="password2"
            required
            aria-describedby="password2Help"
            placeholder="Confirm password"
            minLength={8}
            onChange={handleInputChange}
            value={formData.password2}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </section>
  );
}

export default CreateAccountPage;
