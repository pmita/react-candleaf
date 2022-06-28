import React from 'react';
import ReactDOM from 'react-dom/client';
// ROUTER
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
// STYLES
import './assets/styles/App.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);
