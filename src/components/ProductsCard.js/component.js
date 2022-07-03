import React from 'react';
// ROUTER
import { Link } from 'react-router-dom';
// PROP TYPES
import PropTypes from 'prop-types';
// STYLES
import './style.scss';

function ProductCard(props) {
  // STATE & VARIABLES
  const {
    thumbnail, title, price, id,
  } = props;
  return (
    <div className="product-card">
      <img src={thumbnail} alt="product" />
      <div className="product-details">
        <h4 className="product-title">{title}</h4>
        <span className="product-price">
          £
          {price}
        </span>
        <button className="btn primary" type="button">
          <Link to={`/products/${id}`}>
            Check it Out
          </Link>
        </button>
      </div>
    </div>

  );
}

ProductCard.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string.isRequired,
};

ProductCard.defaultProps = {
  thumbnail: '',
  title: '',
  price: '',
};

export default ProductCard;
