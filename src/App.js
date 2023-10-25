import React from 'react';
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
// import ScrollTop from './components/ScrollTop';

function App() {

  return (

    <Router basename={process.env.PUBLIC_URL}>
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
            {/* <Route
            path='/merch'
            element={<Merch />}
            /> */}
            <Route
                    path="*"
                    element={<NotFound />}
                />
      </Routes>
    </Router>

  );
}

export default App;
