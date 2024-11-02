import React from 'react'

function CreateAccountPage() {
  return (
    <section className="content-container createAccountPage p-3">
      <h2 className="text-center">Create Account</h2>
      <form action="post">
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
          />
        </div>

        <div className="form-group mt-3 w-75 d-block mx-auto">
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
          />
        </div>

        <div className="form-group mt-3 w-75 d-block mx-auto">
          <label htmlFor="password2" className="form-label">
          Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="password2"
            id="password2"
            aria-describedby="password2Help"
            placeholder="Confirm password"
          />
        </div>
      </form>
    </section>
  )
}

export default CreateAccountPage