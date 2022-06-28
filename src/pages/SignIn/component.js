/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
// STYLES
import './style.scss';

function SignIn() {
  // STATE & VARIABLES
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // EVENTS
  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log(email, password);
  };

  return (
    <div className="signin-page">
      <div className="signin-filler" />
      <div className="signin-content">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
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
          <button className="btn primary" type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
