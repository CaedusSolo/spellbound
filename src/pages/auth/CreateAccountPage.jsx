import React, {useState} from 'react'
import axios from 'axios'
function CreateAccountPage() {

  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password1: '',
    password2: ''
  })

  function handleInputChange(e) {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  async function handleFormSubmit(e) {
    e.preventDefault()
    
    try {
      const response = await axios.post('http://localhost:5000/auth/register', formData)
      alert(response.data.message)
    }
    catch {
      alert("Error")
    }
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
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group mt-3 w-75 d-block mx-auto">
          <label htmlFor="username" className="form-label">
            Username (minimum 5 characters)
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
            aria-describedby="usernameHelp"
            placeholder="Enter username"
            minLength={5}
            onChange={handleInputChange}
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
            minLength={8}
            onChange={handleInputChange}
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
            minLength={8}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">Submit</button>
      </form>
    </section>
  )
}

export default CreateAccountPage