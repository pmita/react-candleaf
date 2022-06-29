/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
// ROUTER
import { Link } from 'react-router-dom';
// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { signOutUser } from '../../store/thunk';
// ASSETS
import Burger from '../../assets/images/svg/burger.svg';
// STYLES
import './style.scss';

function Navigation() {
  // STATE & VARIABLES
  const [isHidden, setIsHidden] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // EVENTS
  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  const handleLogOut = () => {
    dispatch(signOutUser());
  };

  return (
    <nav>
      <img
        src={Burger}
        alt="Burger icon for mobiles"
        className="navigation-burger"
        onClick={handleClick}
      />

      <Link
        to="/"
        id="navigation-logo"
      >
        CandLeaf
      </Link>

      <ul
        className={isHidden ? 'navigation-links' : 'navigation-links active'}
      >
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/our-story">Our Story</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>

      {!user && (
        <ul
          className={isHidden ? 'navigation-actions' : 'navigation-actions active'}
        >
          <button className="btn primary" type="button">
            <Link to="/signin">Login</Link>
          </button>
          <button className="btn secondary" type="button">
            <Link to="/signup">Sign Up</Link>
          </button>
        </ul>
      )}

      {user && (
        <ul
          className={isHidden ? 'navigation-actions' : 'navigation-actions active'}
        >
          <h4>
            Hey,
            {user.displayName}
          </h4>
          <button className="btn primary" type="button" onClick={handleLogOut}>
            Log Out
          </button>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
