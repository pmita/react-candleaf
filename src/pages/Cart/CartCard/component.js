import React from 'react';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { removeItemFromCart } from '../../../store/thunk';
// PROP TYPES
// STYLE
import './style.scss';

function CartCard({
  thumbnail, title, price, quantity, id,
}) {
  // STATE & VARIABLES
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  // EVENTS
  const handleClick = () => {
    dispatch(removeItemFromCart(user.uid, id));
  };
  return (
    <div className="cart-item">
      <img src={thumbnail} alt="item description" className="cart-itemThumbnail" />
      <div className="cart-itemDetails">
        <h3>{title}</h3>
        <h4>{price}</h4>
      </div>
      <div className="cart-itemQuantity">
        <h4>
          Quanity
          {' '}
          {quantity}
        </h4>
        <button className="btn secondary" onClick={handleClick} type="button">Remove</button>
      </div>
      <div className="cart-itemTotal">
        <h4>
          Total
          {' £'}
          {Math.floor(price * quantity)}
        </h4>
      </div>
    </div>
  );
}

CartCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default CartCard;
