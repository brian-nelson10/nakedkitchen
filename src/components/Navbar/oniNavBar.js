import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/images/oniboiBlack.png";
import "./navbar.css";
const wordVariants = {
  hovered: {
    y: [0, -2, 0, 2, 0],
    transition: { duration: .5, ease: 'easeInOut' }
  }
}
const OniNavbar = () => {
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
            backgroundColor: isTransparent ? "transparent" : "#FFB91D",
         
            className: isTransparent ? "aa" : "ab"
        }}
      className={`fixed top-0 left-0 w-full bg-white p-4 flex items-center justify-between transition-all duration-300 font-benditos ${
        scrolling ? 'opacity-0' : 'opacity-100'
      }`}
      initial={{ opacity: 0, y: -300 }}
      animate={controls}
     
    >
      <div className="grid grid-cols-3 md:space-x-4 md:pt-2 mt-2 text-2xl md:text-[3rem] w-full flex items-center">
        <div className=''>
        <p onClick={handleHome} className={isTransparent ? 'font-roboto -mt-6 w-[1rem] md:w-max md:visible text-[2rem] md:text-[6rem] text-[#FD3E31] hover:cursor-pointer md:drop-shadow-[4px_4px_0px_#FFB91D]' : 'font-roboto text-[#FD3E31] -mt-3 w-[1rem] md:w-max text-[2rem] md:text-[6rem] hover:cursor-pointer md:drop-shadow-[4px_4px_0px_#FFB91D]'}>ONI BOI</p>
        </div>
        <div className='text-start -ml-8 md:ml-8 space-x-12 md:space-x-[13rem] text-xl md:text-[3rem] flex flex-row'>
          <div className='w-[2rem] h-[2rem] pl-6 md:pl-0 text-center'>
        <a href="/menus" className={isTransparent ? "md:hover:text-[3.2rem] aa" : "md:hover:text-[5.2rem] ab"}>
            Menu
        </a>
        </div>
        <div className='w-[2rem] h-[2rem]'>
        <a href="/catering" className={isTransparent ? "md:hover:text-[3.2rem] aa" : "md:hover:text-[5.2rem] ab"}>
          Catering
        </a>
        </div>
        <div className='w-[2rem] h-[2rem] z-50'>
        <a href="/merch" className={isTransparent ? "md:hover:text-[3.2rem] aa" : "md:hover:text-[5.2rem] ab"}>
          Merch
        </a>
        </div>
        </div>
        <div className='items-end text-end justify-end flex z-10'>
        <a href="/about" className="">
        <img
        src={logo}
        alt="Icon"
        className="w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] object-contain items-end text-end justify-end drop-shadow-[5px_4px_3px_rgba(0,0,0)]"
        />
        </a>
      </div>
      </div>
    
    </motion.nav>
    </AnimatePresence>
  );
};

export default OniNavbar;
