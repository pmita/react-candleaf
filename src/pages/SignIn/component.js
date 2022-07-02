/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
// REDUX
import { useDispatch } from 'react-redux';
import Input from '../../components/Input';
import { signInUser } from '../../store/thunk';
// STYLES
import './style.scss';

function SignIn() {
  // STATE & VARIABLES
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  // EVENTS
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInUser(email, password));
  };

  return (
    <div className="signin-page">
      <div className="signin-filler" />
      <div className="signin-content">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            errorMessage="It should be a valid email address"
            value={email}
            required
          />
          <Input
            type="password"
            name="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            errorMessage="Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character"
            pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
            value={password}
            required
          />
          <button className="btn primary" type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
