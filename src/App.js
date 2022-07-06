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
import PrivateRouteToHome from './components/PrivateRouteToHome';
// PAGES
import Home from './pages/Home';
import Product from './pages/Product/component';
import Products from './pages/Products';
import OurStory from './pages/OurStory';
import ContactUs from './pages/ContactUs';
import SignIn from './pages/SignIn/component';
import SignUp from './pages/SignUp/component';
import Cart from './pages/Cart/component';

function App() {
  // STATE & VARIABLES
  const { authIsReady, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // useEFFECT
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      dispatch({ type: AUTH_IS_READY, payload: authUser });
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
            <Route path="/products" exact element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/signin" element={<PrivateRouteToHome user={user} />}>
              <Route path="/signin" element={<SignIn />} />
            </Route>
            <Route path="/signup" element={<PrivateRouteToHome user={user} />}>
              <Route path="/signup" element={<SignUp />} />
            </Route>
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
