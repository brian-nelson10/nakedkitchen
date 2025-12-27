// import { useState, useEffect } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation
// } from 'react-router-dom';
// import Home from './pages/home';
// import MenuBreakfast from './pages/menuBreakfast';
// import Menu from './pages/menu';
// import MenuLunchDinner from './pages/menuLunchDinner';
// import MenuDrinks from './pages/menuDrinks';
// import About from './pages/about';
// import MenuCatering from './pages/menuCatering';
// import NotFound from './pages/NotFound';
// import Contact from './pages/contact';
// import Merch from './pages/merch';
// import ScrollToTop from './components/scrollToTop';
// import Takeout from './pages/takeout';
// import HoveringImageButton from './components/HoveringImageButton';
// import Bread from './pages/bread';
// import Gallery from './pages/gallery';
// import OniBoi from './pages/oniboi';
// import Order from './pages/order';
// import FamilyMealOrder from './components/Order/familystyleorder';
// import { quantum } from 'ldrs';
// /* -------------------------------
//    Layout wrapper (route-aware)
// -------------------------------- */
// function Layout({ children }) {
//   const location = useLocation();
//   const hideOnRoutes = ['/order', '/menus', '/catering', '/family'];
//   const hideHoverButton = hideOnRoutes.includes(location.pathname);
//   return (
//     <>
//       {!hideHoverButton && (
//         <div className="relative z-50">
//           <div className="absolute top-[5rem] md:top-[5rem] left-2 md:left-12">
//             <HoveringImageButton />
//           </div>
//         </div>
//       )}
//       {children}
//     </>
//   );
// }

// /* -------------------------------
//    Main App
// -------------------------------- */
// function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const handlePageLoad = () => {
//       setIsLoading(false);
//       clearTimeout(timeoutId);
//     };

//     window.addEventListener('load', handlePageLoad);

//     const timeoutId = setTimeout(() => {
//       setIsLoading(false);
//       window.removeEventListener('load', handlePageLoad);
//     }, 4000);

//     return () => {
//       window.removeEventListener('load', handlePageLoad);
//       clearTimeout(timeoutId);
//     };
//   }, []);

//   quantum.register();

//   return (
//     <div>
//       {isLoading ? (
//         <div className="loading-spinner grass py-[15rem] md:p-[25rem] min-h-screen text-center items-center">
//           <l-quantum
//             size="245"
//             speed="3.5"
//             color="#F6B092"
//           ></l-quantum>
//           <p className="font-benditos text-[#F6B092] text-center text-[3.5rem] tracking-wide md:text-[4rem]">
//             loading duuude
//           </p>
//         </div>
//       ) : (
//         <div className="main-content">
//           <Router basename={process.env.PUBLIC_URL}>
//             <ScrollToTop />

//             <Layout>
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/home" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/menus" element={<Menu />} />
//                 <Route path="/breakfast" element={<MenuBreakfast />} />
//                 <Route path="/lunch" element={<MenuLunchDinner />} />
//                 <Route path="/drinks" element={<MenuDrinks />} />
//                 <Route path="/catering" element={<MenuCatering />} />
//                 <Route path="/contact" element={<Contact />} />
//                 <Route path="/milkbread" element={<Bread />} />
//                 <Route path="/merch" element={<Merch />} />
//                 <Route path="/POPUP" element={<Takeout />} />
//                 <Route path="/Takeout" element={<Takeout />} />
//                 <Route path="/gallery" element={<Gallery />} />
//                 <Route path="/ONIBOI" element={<OniBoi />} />
//                 <Route path="/order" element={<Order />} />
//                 <Route path="/family" element={<FamilyMealOrder />} />
//                 <Route path="*" element={<NotFound />} />
//               </Routes>
//             </Layout>

//           </Router>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import Home from './pages/home';
import MenuBreakfast from './pages/menuBreakfast';
import Menu from './pages/menu';
import MenuLunchDinner from './pages/menuLunchDinner';
import MenuDrinks from './pages/menuDrinks';
import About from './pages/about';
import MenuCatering from './pages/menuCatering';
import NotFound from './pages/NotFound';
import Contact from './pages/contact';
import Merch from './pages/merch';
import ScrollToTop from './components/scrollToTop';
import Takeout from './pages/takeout';
import HoveringImageButton from './components/HoveringImageButton';
import Bread from './pages/bread';
import Gallery from './pages/gallery';
import OniBoi from './pages/oniboi';
import Order from './pages/order';
import FamilyMealOrder from './components/Order/familystyleorder';
import Confirmation from './components/Order/confirmation';

import { quantum } from 'ldrs';

/* -------------------------------
   Layout wrapper (route-aware)
-------------------------------- */
function Layout({ children }) {
  const location = useLocation();
  const hideOnRoutes = ['/order', '/menus', '/catering', '/family', '/confirmation'];
  const hideHoverButton = hideOnRoutes.includes(location.pathname);

  return (
    <>
      {!hideHoverButton && (
        <div className="relative z-50">
          <div className="absolute top-[5rem] md:top-[5rem] left-2 md:left-12">
            <HoveringImageButton />
          </div>
        </div>
      )}
      {children}
    </>
  );
}

/* -------------------------------
   Main App
-------------------------------- */
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  useEffect(() => {
    const handlePageLoad = () => {
      setIsLoading(false);
      clearTimeout(timeoutId);
    };

    window.addEventListener('load', handlePageLoad);

    const timeoutId = setTimeout(() => {
      setIsLoading(false);
      window.removeEventListener('load', handlePageLoad);
    }, 4000);

    return () => {
      window.removeEventListener('load', handlePageLoad);
      clearTimeout(timeoutId);
    };
  }, []);

  quantum.register();

  return (
    <div>
      {isLoading ? (
        <div className="loading-spinner grass py-[15rem] md:p-[25rem] min-h-screen text-center items-center">
          <l-quantum size="245" speed="3.5" color="#F6B092"></l-quantum>
          <p className="font-benditos text-[#F6B092] text-center text-[3.5rem] tracking-wide md:text-[4rem]">
            loading duuude
          </p>
        </div>
      ) : (
        <div className="main-content">
          <Router basename={process.env.PUBLIC_URL}>
            <ScrollToTop />

            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menus" element={<Menu />} />
                <Route path="/breakfast" element={<MenuBreakfast />} />
                <Route path="/lunch" element={<MenuLunchDinner />} />
                <Route path="/drinks" element={<MenuDrinks />} />
                <Route path="/catering" element={<MenuCatering />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/milkbread" element={<Bread />} />
                <Route path="/merch" element={<Merch />} />
                <Route path="/POPUP" element={<Takeout />} />
                <Route path="/Takeout" element={<Takeout />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/ONIBOI" element={<OniBoi />} />

                {/* REGULAR ORDER */}
                <Route
                  path="/order"
                  element={<Order setConfirmedOrder={setConfirmedOrder} />}
                />

                {/* FAMILY MEAL ORDER */}
                <Route
                  path="/family"
                  element={<FamilyMealOrder setConfirmedOrder={setConfirmedOrder} />}
                />

                {/* CONFIRMATION */}
                <Route
                  path="/confirmation"
                  element={
                    confirmedOrder ? (
                      <Confirmation
                        data={confirmedOrder}
                        reset={() => setConfirmedOrder(null)}
                      />
                    ) : (
                      <Home />
                    )
                  }
                />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;

