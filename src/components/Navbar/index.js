import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/images/OrangeDudeSmall.png"

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const controls = useAnimation();
  const [isTransparent, setIsTransparent] = useState(false);
  const navigate = useNavigate();
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
      controls.start({ opacity: 0, y: -300 });
      setIsTransparent(false)
    } else {
      controls.start({ opacity: 1, y: 0 });
      setTimeout(() => {
        setIsTransparent(true);
      }, 2000); // Delay the background color change by 1 second
    }
  }, [scrolling, controls]);
   function handleHome() {
    navigate("/");
   };
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
      initial={{ opacity: 0, y: -300 }}
      animate={controls}
     
    >
      <div className="grid grid-cols-3 md:space-x-4 md:pt-2 mt-2 text-2xl md:text-[3rem] w-full flex items-center">
        <div className=''>
        <p onClick={handleHome} className={isTransparent ? 'font-summer -mt-6 w-[1rem] md:w-max text-2xl md:text-[5rem] text-[#e3b505] hover:cursor-pointer' : 'font-summer -mt-3 w-[1rem] md:w-max text-2xl md:text-[5rem] hover:cursor-pointer'}>Naked Kitchen</p>
        </div>
        <div className='text-start -ml-7 md:ml-0 space-x-12 md:space-x-[12rem] text-xl md:text-[3rem] flex flex-row'>
          <div className='w-[1rem] md:w-[2rem] h-[2rem]'>
        <a href="/menus" className="md:hover:text-[#e3b505] md:hover:font-summer md:hover:text-[3.2rem]">
          Menu
        </a>
        </div>
        <div className='w-[2rem] h-[2rem]'>
        <a href="/catering" className="md:hover:text-[#e3b505] md:hover:font-summer md:hover:text-[3.2rem]">
          Catering
        </a>
        </div>
        <div className='w-[2rem] h-[2rem] z-50'>
        <a href="/merch" className="md:hover:text-[#e3b505] md:hover:font-summer md:hover:text-[3.2rem]">
          Merch
        </a>
        </div>
        </div>
        <div className='items-end text-end justify-end flex z-10'>
        <img
        src={logo}
        alt="Icon"
        className="w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] object-contain items-end text-end justify-end"
      />
      </div>
      </div>
    
    </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
