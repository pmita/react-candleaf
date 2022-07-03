import React from 'react';
// PROP TYPES
import PropTypes from 'prop-types';
// STYLES
import './style.scss';

function ProductCard(props) {
  // STATE & VARIABLES
  const { thumbnail, title, price } = props;
  return (
    <div className="product-card">
      <img src={thumbnail} alt="product" />
      <div className="product-details">
        <h4 className="product-title">{title}</h4>
        <span className="product-price">
          £
          {price}
        </span>
      </div>
    </div>

  );
}

ProductCard.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
};

ProductCard.defaultProps = {
  thumbnail: '',
  title: '',
  price: '',
};

export default ProductCard;
