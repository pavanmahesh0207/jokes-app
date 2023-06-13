import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    if (username === 'pavan' && password === 'pavan@123') {
      navigate('/homepage')
      console.log('Logged in successfully')
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div className="container login-form-container">
      <h2 className="text-center">Login</h2>

      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label className="mt-3">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="pavan"
          />
        </div>
        <div className="form-group">
          <label className="mt-3">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="pavan@123"
          />
        </div>
        {error && <div className="text-danger">{error}</div>}
        <button type="submit" className="btn btn-primary mt-3">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
