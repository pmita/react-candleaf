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
  const [signInForm, setSignInForm] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const signInInputs = [
    {
      id: 1,
      name: 'Email',
      type: 'email',
      required: true,
      errorMessage: 'It should be a valid email address',
    },
    {
      id: 2,
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
    dispatch(signInUser(signInForm.email, signInForm.password));
  };

  const onChange = (e) => {
    setSignInForm({ ...signInForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="signin-page">
      <div className="signin-filler" />
      <div className="signin-content">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          {signInInputs.map((input) => (
            <Input
              key={input.id}
              onChange={onChange}
              value={signInForm[input.name]}
              {...input}
            />
          ))}
          <button className="btn primary" type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
