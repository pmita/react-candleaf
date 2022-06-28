import React, { useState } from 'react';
// ROUTER
import { Link } from 'react-router-dom';
// ASSETS
import Burger from '../../assets/images/svg/burger.svg';
// STYLES
import './style.scss';

function Navigation() {
  // STATE & VARIABLES
  const [isHidden, setIsHidden] = useState(false);

  // EVENTS
  const handleClick = () => {
    setIsHidden(!isHidden);
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

      <ul
        className={isHidden ? 'navigation-actions' : 'navigation-actions active'}
      >
        <button className="btn primary" type="button">Login</button>
        <button className="btn secondary" type="button">Sign Up</button>
      </ul>
    </nav>
  );
}

export default Navigation;
