import React, { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';

const menuItems = {
  snacks: [
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[4rem] text-[#e3b505]'>item 1</div>
    <div className='font-gt uppercase mb-2 text-[1.2rem] text-[#dbe7e8]'>Lorem epsum, menu item descriptions. Yum Yum. Lorem, lorem epsum. Lorem</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>12$</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[4rem] text-[#e3b505]'>item 2</div>
    <div className='font-gt uppercase mb-2 text-[1.2rem] text-[#dbe7e8]'>Lorem epsum, menu item descriptions. Yum Yum. Lorem, lorem epsum. Lorem</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>12$</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[4rem] text-[#e3b505]'>item 3</div>
    <div className='font-gt uppercase mb-2 text-[1.2rem] text-[#dbe7e8]'>Lorem epsum, menu item descriptions. Yum Yum. Lorem, lorem epsum. Lorem</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>12$</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[4rem] text-[#e3b505]'>item 4</div>
    <div className='font-gt uppercase mb-2 text-[1.2rem] text-[#dbe7e8]'>Lorem epsum, menu item descriptions. Yum Yum. Lorem, lorem epsum. Lorem</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>12$</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[4rem] text-[#e3b505]'>item 5</div>
    <div className='font-gt uppercase mb-2 text-[1.2rem] text-[#dbe7e8]'>Lorem epsum, menu item descriptions. Yum Yum. Lorem, lorem epsum. Lorem</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>12$</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[4rem] text-[#e3b505]'>item 6</div>
    <div className='font-gt uppercase mb-2 text-[1.2rem] text-[#dbe7e8]'>Lorem epsum, menu item descriptions. Yum Yum. Lorem, lorem epsum. Lorem</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>12$</div>
    </div></>,
    // Add more snack items as needed
  ],
  entrees: [
   <><div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[4rem] text-[#e3b505]'>item a</div>
    <div className='font-gt uppercase mb-2 text-[1.2rem] text-[#dbe7e8]'>Lorem epsum, menu item descriptions. Yum Yum. Lorem, lorem epsum. Lorem</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>12$</div>
    </div></>,
    <><div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[4rem] text-[#e3b505]'>item b</div>
    <div className='font-gt uppercase mb-2 text-[1.2rem] text-[#dbe7e8]'>Lorem epsum, menu item descriptions. Yum Yum. Lorem, lorem epsum. Lorem</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>12$</div>
    </div></>,
    <><div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[4rem] text-[#e3b505]'>item c</div>
    <div className='font-gt uppercase mb-2 text-[1.2rem] text-[#dbe7e8]'>Lorem epsum, menu item descriptions. Yum Yum. Lorem, lorem epsum. Lorem</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>12$</div>
    </div></>,
    <><div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[4rem] text-[#e3b505]'>item d</div>
    <div className='font-gt uppercase mb-2 text-[1.2rem] text-[#dbe7e8]'>Lorem epsum, menu item descriptions. Yum Yum. Lorem, lorem epsum. Lorem</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>12$</div>
    </div></>,
    <><div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[4rem] text-[#e3b505]'>item e</div>
    <div className='font-gt uppercase mb-2 text-[1.2rem] text-[#dbe7e8]'>Lorem epsum, menu item descriptions. Yum Yum. Lorem, lorem epsum. Lorem</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>12$</div>
    </div></>,
    <><div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[4rem] text-[#e3b505]'>item f</div>
    <div className='font-gt uppercase mb-2 text-[1.2rem] text-[#dbe7e8]'>Lorem epsum, menu item descriptions. Yum Yum. Lorem, lorem epsum. Lorem</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>12$</div>
    </div></>,
    // Add more entree items as needed
  ],
};

const BreakfastSubmenu = () => {
  const [activeMenu, setActiveMenu] = useState('snacks');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="h-max flex flex-col items-center justify-center mt-[10rem] md:mt-[20rem]">
         <div className='text-[#dbe7e8] font-poppins mb-2'>Breakfast menu offered 7am - 4pm</div>
      <div className="flex flex-col md:flex-row space-x-4 text-center font-gt text-[3rem] uppercase">
        <div
          className={`cursor-pointer text-[#dbe7e8] ${
            activeMenu === 'snacks' ? 'text-[#e3b505]' : ''
          }`}
          onClick={() => handleMenuClick('snacks')}
        >
          Snacks
        </div>
        <div className='text-[#dbe7e8] pb-2'>|</div>
        <div
          className={`cursor-pointer text-[#dbe7e8] ${
            activeMenu === 'entrees' ? 'text-[#e3b505]' : ''
          }`}
          onClick={() => handleMenuClick('entrees')}
        >
          Entrees
        </div>
      </div>
      <AnimateSharedLayout type="crossfade">
        <motion.div layout className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {menuItems[activeMenu].map((item, index) => (
            <motion.div
              key={item}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="border border-[2px] border-[#e3b505] my-[5rem] mx-[1rem] md:w-[36rem] text-center items-center p-2"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </AnimateSharedLayout>
    </div>
  );
};

export default BreakfastSubmenu;
