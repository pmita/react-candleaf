import React from 'react';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { removeItemFromCart, increaseItemQnt, decreaseItemQnt } from '../../../store/thunk';
// PROP TYPES
// STYLE
import './style.scss';

function CartCard({
  thumbnail, title, price, quantity, id,
}) {
  // STATE & VARIABLES
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleClick = (e) => {
    e.preventDefault();
    const name = e.target.getAttribute('data-name');
    switch (name) {
      case 'increase':
        dispatch(increaseItemQnt(user.uid, id, quantity + 1));
        break;
      case 'remove':
        dispatch(removeItemFromCart(user.uid, id));
        break;
      case 'decrease':
        if (quantity !== 1) {
          dispatch(decreaseItemQnt(user.uid, id, quantity - 1));
        } else {
          dispatch(removeItemFromCart(user.uid, id));
        }
        break;
      default:
    }
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
        <div className="actions">
          <button className="btn secondary" data-name="decrease" type="button" onClick={handleClick}>-</button>
          <button className="btn remove" data-name="remove" onClick={handleClick} type="button">Remove</button>
          <button className="btn secondary" data-name="increase" type="button" onClick={handleClick}>+</button>
        </div>
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
