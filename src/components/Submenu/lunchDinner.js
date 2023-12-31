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
  handhelds: [
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
  salads: [
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

const LunchDinnerSubmenu = () => {
  const [activeMenu, setActiveMenu] = useState('snacks');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center mt-[20rem]">
         <div className='text-[#dbe7e8] font-poppins mb-2'>Lunch Menu offered after 11am</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>Entrees offered after 3pm</div>
      <div className="flex space-x-4 font-gt text-[3rem] uppercase">
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
            activeMenu === 'handhelds' ? 'text-[#e3b505]' : ''
          }`}
          onClick={() => handleMenuClick('handhelds')}
        >
          Handhelds
        </div>
        <div className='text-[#dbe7e8] pb-2'>|</div>
        <div
          className={`cursor-pointer text-[#dbe7e8] ${
            activeMenu === 'salads' ? 'text-[#e3b505]' : ''
          }`}
          onClick={() => handleMenuClick('salads')}
        >
          Salads & Bowls
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
        <motion.div layout className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {menuItems[activeMenu].map((item, index) => (
            <motion.div
              key={item}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="border border-[2px] border-[#e3b505] my-5 mx-1 md:w-[36rem] lg:w-[36rem] text-center items-center p-2"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </AnimateSharedLayout>
    </div>
  );
};

export default LunchDinnerSubmenu;
