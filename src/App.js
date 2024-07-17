import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
import Home from './pages/home';
import MenuBreakfast from './pages/menuBreakfast';
import Menu from './pages/menu';
import MenuLunchDinner from './pages/menuLunchDinner';
import MenuDrinks from './pages/menuDrinks';
import About from './pages/about';
import MenuCatering from './pages/menuCatering';
import NotFound from './pages/NotFound';
import Contact from './pages/contact';
import Thanksgiving from './pages/thanksgiving';
import Merch from './pages/merch';
import MenuPorch from './pages/porch';
import ScrollToTop from './components/scrollToTop';
import PopUpMenu from './pages/popupmenu';
import { quantum } from 'ldrs';
// import ScrollTop from './components/ScrollTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setIsLoading(false);
    };

    // Add event listener for the page load
    window.addEventListener('load', handlePageLoad);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  quantum.register()
  
  return (
    <div>
    {isLoading ? (
      <div className="loading-spinner grass py-[20rem] md:p-[25rem] min-h-screen text-center items-center">
        {/* You can use a spinner or any loading animation here */}
        <l-quantum
    size="245"
    speed="4.5" 
    color="#F6B092" 
  ></l-quantum>
  <p className='font-ent text-[#F6B092] text-center text-[3.5rem] tracking-wide md:text-[4rem]'>WAITING</p>
      </div>
    ) : (
      <div className="main-content">
       <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          exact element={<Home />}
        />
        <Route
          path="/home"
          exact element={<Home />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/menus'
          element={<Menu />}
        />
        <Route
          path="/breakfast"
          element={<MenuBreakfast />}
        />
        <Route
          path='/lunch&dinner'
          element={<MenuLunchDinner />}
        />
        <Route
          path='/drinks'
          element={<MenuDrinks />}
        />
         <Route
          path='/catering'
          element={<MenuCatering />}
        />
        <Route
            path="/contact"
            exact element={<Contact />}
            />
            <Route
          path='/thanksgiving'
          element={<Thanksgiving />}
        />
            {/* <Route
            path='/reservations'
            element={<Reservations />}
            /> */}
            <Route
            path='/merch'
            element={<Merch />}
            />
            <Route
            path='/porchfest'
            element={<MenuPorch />}
            />
            <Route
            path='/popup'
            element={<PopUpMenu />}
            />
            <Route
            path='/popupmenu'
            element={<PopUpMenu />}
            />
            <Route
                    path="*"
                    element={<NotFound />}
                />
      </Routes>
    </Router>
      </div>
    )}
  </div>

    

  );
}

export default App;
