import React, { useState } from 'react';
import './Login.css'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('buyer'); 
  const [showSignup, setShowSignup] = useState(false); 

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      alert(`Logged in as ${userType}`);
    } else {
      alert('Please enter email and password');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (email && password) {
      alert(`Signed up as ${userType}`);
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <div className="auth-container">
      <h2>{showSignup ? 'Create Account' : 'Login'}</h2>

      {/* Login Form */}
      {!showSignup && (
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>User Type:</label>
            <select onChange={(e) => setUserType(e.target.value)} value={userType}>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>
          <button className='bt' type="submit">Login</button>
        </form>
      )}

      {/* Sign-up Form */}
      {showSignup && (
        <form onSubmit={handleSignup}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>User Type:</label>
            <select onChange={(e) => setUserType(e.target.value)} value={userType}>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>
          <button type="submit">Create Account</button>
        </form>
      )}

      <p>
        {showSignup ? (
          <span>
            Already have an account?{' '}
            <a href="#" onClick={() => setShowSignup(false)}>
              Login here
            </a>
          </span>
        ) : (
          <span>
            Don't have an account?{' '}
            <a href="#" onClick={() => setShowSignup(true)}>
              Create account
            </a>
          </span>
        )}
      </p>
    </div>
  );
};

export default Login;
