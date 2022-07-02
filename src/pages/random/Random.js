import React, { useState } from 'react';

function Random() {
  // STATE
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // EVENTS
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="random">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>password</span>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button type="submit">Click</button>
      </form>
    </div>
  );
}

export default Random;
