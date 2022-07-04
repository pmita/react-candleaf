import React from 'react';
// ROUTER
import { Link } from 'react-router-dom';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addItemToCart } from '../../store/thunk';
// PROP TYPES
// STYLES
import './style.scss';

function ProductCard(props) {
  // STATE & VARIABLES
  const {
    thumbnail, title, price, id,
  } = props;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  // EVENTS
  const handleClick = () => {
    if (user) {
      dispatch(addItemToCart(user.uid, id, { ...props, quantity: 1 }));
    }
  };

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
      <div className="product-actions">
        {user
          ? (<button className="btn primary" type="button" onClick={handleClick}>Add to Cart</button>)
          : (<button className="btn primary" type="button" onClick={handleClick} disabled>Add to Cart</button>)}
        <button className="btn secondary" type="button">
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
