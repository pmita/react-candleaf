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
  const { cart, isPending, error } = useSelector((state) => state.cart);

  // useEFFECT
  useEffect(() => {
    if (user) {
      dispatch(getCartItems(user.uid));
    }
  }, [user, dispatch]);

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {isPending && <p>Items loading...</p>}
      {error && <p>{error}</p>}
      {cart && (
        <div className="cart-content">
          {cart.map((item) => <CartCard {...item} key={item.id} />)}
        </div>
      )}
    </div>
  );
}

export default Cart;
