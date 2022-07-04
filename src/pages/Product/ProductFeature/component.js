import React from 'react';
// PROPS TYPES
import PropTypes from 'prop-types';
// STYLES
import './style.scss';

function ProductFeature({ feature }) {
  return (
    <li className="feature-item">
      {feature}
    </li>
  );
}

ProductFeature.propTypes = {
  feature: PropTypes.string.isRequired,
};

export default ProductFeature;
