import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Menus", path: "/menus" },
  { label: "Order", path: "/order" },
  { label: "Catering", path: "/catering" },
  { label: "Merch", path: "/merch" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Scroll hide effect */
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 315);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHome = () => {
    setMenuOpen(false);
    navigate("/");
  };

  return (
    <>
      {/* NAV BAR */}
      <motion.nav
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: scrolling ? -300 : 0, opacity: scrolling ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 w-full z-50 bg-[#FFB91D] px-6 py-4 flex items-center justify-between"
      >
        {/* HOME */}
        <button
          onClick={handleHome}
          className="font-summer text-[#FD3E31] text-3xl md:text-6xl"
        >
          naked kitchen
        </button>

        {/* HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative w-10 h-10 flex items-center justify-center z-50"
        >
          {/* TOP LINE */}
          <motion.span
            className="absolute w-8 h-[3px] bg-black"
            animate={{
              rotate: menuOpen ? 45 : 0,
              y: menuOpen ? 0 : -8,
            }}
            transition={{ duration: 0.2 }}
          />

          {/* MIDDLE LINE */}
          <motion.span
            className="absolute w-8 h-[3px] bg-black"
            animate={{
              opacity: menuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
          />

          {/* BOTTOM LINE */}
          <motion.span
            className="absolute w-8 h-[3px] bg-black"
            animate={{
              rotate: menuOpen ? -45 : 0,
              y: menuOpen ? 0 : 8,
            }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </motion.nav>
      {/* FULL SCREEN MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-lg flex items-center justify-center"
          >
            <div className="flex flex-col gap-6 text-center">
              {menuItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => {
                    setMenuOpen(false);
                    navigate(item.path);
                  }}
                  className="
                    font-benditos
                    text-4xl md:text-6xl
                    text-white
                    transition-colors duration-200
                    hover:text-[#FFB91D]
                    active:text-[#FD3E31]
                  "
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
