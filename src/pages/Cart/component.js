import React, { useEffect } from 'react';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems } from '../../store/thunk';
import CartCard from './CartCard/component';
// STYLES
import './style.scss';

function Cart() {
  // STATE & VARIABLES
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  // useEFFECT
  useEffect(() => {
    if (user) {
      dispatch(getCartItems(user.uid));
    }
  }, [user, dispatch]);
  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {cart && (
        <div className="cart-content">
          {cart.map((item) => <CartCard {...item} key={item.id} />)}
        </div>
      )}
    </div>
  );
}

export default Cart;
