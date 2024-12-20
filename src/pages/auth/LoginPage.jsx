import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../AuthProvider";

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const initialFormData = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    console.log("Form submitted!");

    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        username: formData.username,
        password: formData.password,
      });
      login(response.data.accessToken, formData.username);
      setFormData(initialFormData);

      alert(`Message: ${response.data.message}`);
      navigate("/");
    } catch (err) {
      alert(`Error: ${err.data.error}`);
    }
  }

  return (
    <section className="content-container loginPage p-3">
      <h2 className="text-center">Log In</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group mt-4 w-75 d-block mx-auto">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
            value={formData.username}
            minLength={4}
            aria-describedby="usernameHelp"
            placeholder="Enter username"
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group mt-4 w-75 d-block mx-auto">
          <label htmlFor="password" className="form-label">
            Enter Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={formData.password}
            aria-describedby="password1Help"
            placeholder="Enter password"
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-5">
          Submit
        </button>
      </form>
    </section>
  );
}

export default LoginPage;
