import React, { useEffect } from 'react';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems } from '../../store/thunk';
// STYLES
import './style.scss';

function Cart() {
  // STATE & VARIABLES
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  // useEFFECT
  useEffect(() => {
    if (user) {
      dispatch(getCartItems(user.uid));
    }
  }, [user, dispatch]);
  return (
    <div className="cart-page">
      <h1>Test</h1>
    </div>
  );
}

export default Cart;
