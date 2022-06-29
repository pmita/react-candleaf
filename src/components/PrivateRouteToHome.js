import React from 'react';
// ROUTER
import { Navigate, Outlet } from 'react-router-dom';
// PROP TYPES
import PropTypes from 'prop-types';

function PrivateRouteToHome({ user }) {
  return user ? <Navigate to="/" /> : <Outlet />;
}

PrivateRouteToHome.propTypes = {
  user: PropTypes.bool.isRequired,
};

export default PrivateRouteToHome;
