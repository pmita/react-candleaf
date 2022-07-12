import React from 'react';
// ROUTER
import { Navigate, Outlet } from 'react-router-dom';
// PROP TYPES
import PropTypes from 'prop-types';

function PrivateRouteToCart({ user }) {
  return user ? <Outlet /> : <Navigate to="/signin" />;
}

PrivateRouteToCart.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
};

PrivateRouteToCart.defaultProps = {
  user: null,
};

export default PrivateRouteToCart;
