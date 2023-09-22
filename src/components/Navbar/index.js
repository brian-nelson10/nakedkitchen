import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const controls = useAnimation();
  const [isTransparent, setIsTransparent] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 315) {
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
            backgroundColor: isTransparent ? "transparent" : "#dbe7e8",
            color: isTransparent ? "#dbe7e8" : "#1b3d38" 
        }}
      className={`fixed top-0 left-0 w-full bg-white p-4 flex items-center justify-between transition-all duration-300 font-gt uppercase ${
        scrolling ? 'opacity-0' : 'opacity-100'
      }`}
      initial={{ opacity: 1, y: -100 }}
      animate={controls}
      exit={{ opacity: 0, y: -100}}
    >
      <div className="grid grid-cols-3 w-full flex items-center space-between-2">
        <div >
        <p className={isTransparent ? 'font-summer text-[5rem] text-[#e3b505]' : 'font-summer text-[5rem]'}>Naked Kitchen</p>
        </div>
        <div className='text-center space-x-[12rem] text-[3rem] flex flex-row'>
          <div className='w-[2rem] h-[2rem]'>
        <a href="/" className="hover:text-[#e3b505] hover:font-summer hover:text-[3.2rem]">
          Menu
        </a>
        </div>
        <div className='w-[2rem] h-[2rem]'>
        <a href="/about" className="hover:text-[#e3b505] hover:font-summer hover:text-[3.2rem]">
          About
        </a>
        </div>
        <div className='w-[2rem] h-[2rem]'>
        <a href="/contact" className="hover:text-[#e3b505] hover:font-summer hover:text-[3.2rem]">
          Contact
        </a>
        </div>
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
