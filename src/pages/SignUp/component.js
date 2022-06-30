/* eslint-disable no-console */

import React, { useState } from 'react';
// ROUTER
import { useNavigate } from 'react-router-dom';
// REDUX
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../store/thunk';
// COMPONENTS
import Input from '../../components/Input';
// STYLES
import './style.scss';

function SignUp() {
  // STATE & VARIABLES
  const [signUpForm, setSignUpForm] = useState({
    username: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signUpInputs = [
    {
      id: 1,
      name: 'Username',
      type: 'text',
      required: true,
      errorMessage: 'Username should be 3-16 characters and should not include any special characters',
      pattern: '^[A-Za-z0-9]{3,16}$',
    },
    {
      id: 2,
      name: 'Email',
      type: 'email',
      required: true,
      errorMessage: 'It should be a valid email address',
    },
    {
      id: 3,
      name: 'Password',
      type: 'password',
      required: true,
      errorMessage: 'Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character',
      pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
    },
  ];

  // EVENTS
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpUser(signUpForm.email, signUpForm.password, signUpForm.username));
    navigate('/');
  };

  const onChange = (e) => {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-page">
      <div className="signup-filler" />
      <div className="signup-content">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {signUpInputs.map((input) => (
            <Input
              key={input.id}
              onChange={onChange}
              value={signUpForm[input.name]}
              {...input}
            />
          ))}
          <button className="btn primary" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
