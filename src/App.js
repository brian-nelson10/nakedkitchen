import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
import Home from './pages/home';
import MenuBreakfast from './pages/menuBreakfast';
import Menu from './pages/menu';
import MenuLunchDinner from './pages/menuLunchDinner';
import MenuDrinks from './pages/menuDrinks';
// import Contact from '../pages/Contact';
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
            {/* <Route
            path="/contact"
            exact element={<Contact />}
            /> */}
            </Routes>
            </Router>
          
    );
}

export default App;
