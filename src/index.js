import React from 'react';
import ReactDOM from 'react-dom/client';
// ROUTER
import { BrowserRouter as Router } from 'react-router-dom';
// REDUX
import { Provider } from 'react-redux';
import myStore from './store/store';
// STYLES
import './assets/styles/App.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={myStore}>
    <Router>
      <App />
    </Router>
  </Provider>,
);
