//COMPONENTS
import Navigation from "./layouts/Navigation/component";
//PAGES
import Home from "./pages/Home";
import Products from './pages/Products';
import OurStory from './pages/OurStory';
import ContactUs from './pages/ContactUs';
import SignIn from "./pages/SignIn/component";
import SignUp from "./pages/SignUp/component";
//ROUTER
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/our-story' element={<OurStory />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
