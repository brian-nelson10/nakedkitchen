import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const controls = useAnimation();
  const [isTransparent, setIsTransparent] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);

    };
  }, []);

  useEffect(() => {
    if (scrolling) {
      controls.start({ opacity: 0, y: -100 });
      setIsTransparent(false)
    } else {
      controls.start({ opacity: 1, y: 0 });
      setTimeout(() => {
        setIsTransparent(true);
      }, 2000); // Delay the background color change by 1 second
    }
  }, [scrolling, controls]);

  return (
    <AnimatePresence mode="wait">
    <motion.nav
        style={{
            backgroundColor: isTransparent ? "transparent" : "white",
            color: isTransparent ? "#dbe7e8" : "black" 
        }}
      className={`fixed top-0 left-0 w-full bg-white p-4 shadow-lg flex items-center justify-between transition-all duration-300 font-gt uppercase text-[2rem] ${
        scrolling ? 'opacity-0' : 'opacity-100'
      }`}
      initial={{ opacity: 1, y: -100 }}
      animate={controls}
      exit={{ opacity: 0, y: -100}}
    >
      <div className="grid grid-cols-3 w-full flex items-center space-x-4">
        <div>
        <p>Naked Kitchen</p>
        </div>
        <div className='text-center space-x-8'>
        <a href="/" className="hover:text-blue-700">
          Home
        </a>
        <a href="/about" className="hover:text-blue-700">
          About
        </a>
        <a href="/services" className="hover:text-blue-700">
          Services
        </a>
        <a href="/contact" className="hover:text-blue-700">
          Contact
        </a>
        </div>
        <div className='items-end text-end justify-end flex'>
        <img
        src="/path-to-your-icon.png"
        alt="Icon"
        className="w-8 h-8 object-contain items-end text-end justify-end"
      />
      </div>
      </div>
    
    </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
