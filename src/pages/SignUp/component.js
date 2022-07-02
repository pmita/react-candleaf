/* eslint-disable no-console */
import React, { useState } from 'react';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '../../store/thunk';
// COMPONENTS
import Input from '../../components/Input';
// STYLES
import './style.scss';

function SignUp() {
  // STATE & VARIABLES
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isPending, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // EVENTS
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpUser(email, password, username));
  };

  return (
    <div className="signup-page">
      <div className="signup-filler" />
      <div className="signup-content">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
            errorMessage="Username should be 3-16 characters and should not include any special characters"
            pattern="^[A-Za-z0-9]{3,16}$"
            value={username}
            required
          />
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
          {error && <p className="error">{error}</p>}
          {!isPending && <button className="btn primary" type="submit">Sign Up</button>}
          {isPending && <button className="btn primary" type="submit" disabled>Loading...</button>}
        </form>
      </div>
    </div>
  );
}

export default SignUp;
