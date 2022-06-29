/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
// REDUX
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUpUser } from '../../store/thunk';
// ROUTER
// STYLES
import './style.scss';

function SignUp() {
  // STATE & VARIABLES
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // EVENTS
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpUser(email, password, username));
    navigate('/');
  };

  return (
    <div className="signup-page">
      <div className="signup-filler" />
      <div className="signup-content">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Username</span>
            <input
              required
              type="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </label>
          <label>
            <span>Email</span>
            <input
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            <span>Password</span>
            <input
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <button className="btn primary" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
