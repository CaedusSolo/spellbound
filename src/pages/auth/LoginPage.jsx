import React from "react";

function LoginPage() {
  return (
    <section className="content-container loginPage p-3">
      <h2 className="text-center">Log In</h2>
      <form action="post">

        <div className="form-group mt-4 w-75 d-block mx-auto">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="email"
            className="form-control"
            name="username"
            id="username"
            aria-describedby="usernameHelp"
            placeholder="Enter username"
          />
        </div>

        <div className="form-group mt-4 w-75 d-block mx-auto">
          <label htmlFor="password1" className="form-label">
            Enter Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password1"
            id="password1"
            aria-describedby="password1Help"
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </section>
  );
}

export default LoginPage;
