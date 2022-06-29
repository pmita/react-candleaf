import React, { useEffect } from 'react';
// ROUTER
import { Routes, Route } from 'react-router-dom';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_IS_READY } from './store/actions/actionTypes';
// FIREBASE
import { auth } from './firebase/config';
// COMPONENTS
import Navigation from './layouts/Navigation/component';
// PAGES
import Home from './pages/Home';
import Products from './pages/Products';
import OurStory from './pages/OurStory';
import ContactUs from './pages/ContactUs';
import SignIn from './pages/SignIn/component';
import SignUp from './pages/SignUp/component';

function App() {
  // STATE & VARIABLES
  const { authIsReady } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // useEFFECT
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      dispatch({ type: AUTH_IS_READY, payload: user });
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      {authIsReady && (
        <>
          <Navigation />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
