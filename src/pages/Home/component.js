import React from 'react';
// COMPONENTS
import { Link } from 'react-router-dom';
import Banner from '../../layouts/Banner/component';
import Brands from '../../layouts/Brands/component';
import MidBanner from '../../layouts/MidBanner/component';
// ROUTER
// ASSETS
import BannerImage from '../../assets/images/candle-image-one.jpg';
// STYLES
import './style.scss';

function Home() {
  return (
    <>
      <Banner />
      <MidBanner img={BannerImage} alt="body shaped candle on fire">
        <h2>From a studio in London to a global brand with over 400 outlets</h2>
        <p>
          We started making these as gifts for our closest friends, with the purest of
          intentions and deepest of love.
        </p>
        <p>
          They loved them so much and pushed us to make it a product for everyone to experience.
          We focus on good ingredients with deep scent that can be used on every occasion and day.
        </p>
        <Link to="/our-story" className="btn primary">
          Check our Story
        </Link>
      </MidBanner>
      <Brands />
    </>
  );
}

export default Home;
