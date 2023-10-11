import React, { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';

const menuItems = {
  snacks: [
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[4rem] text-[#47b9c3]'>Crispy Deviled Eggs</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Crispy Egg White, Chili Crunch, Chives</div>
    <div className='font-summer text-[3rem] text-[#47b9c3]'>12$</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.5rem] text-[#47b9c3]'>Winter Forager Crostini</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Son & Skye Mushroom Mix, House Riccota with Herbs, Winter Truffle Butter on Hippie Bread</div>
    <div className='font-summer text-[3rem] text-[#47b9c3]'>12$</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.3rem] text-[#47b9c3]'>Lemongrass Chicken Satay</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Marinated Chicken Thigh, Green Goddess Oil, Thai Curry Peanut Sauce</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>12$</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.5rem] text-[#47b9c3]'>Pickled Mushroom Satay</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Son & Skye Blue Oyster Mushrooms, Yakitori Sauce, Crumbled Cashew </div>
    <div className='font-summer text-[3rem] text-[#47b9c3]'>12$</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.7rem] text-[#47b9c3]'>Winter Squash Hummus</div>
    <div className='font-poppins mb-2 text-[1rem] text-[#dbe7e8]'>Crunchy Pumpkin Seed Topping, Smoked Paaprika Oil, House Hemp-Seed Crackers and Spiced Cinnamon Crackers</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>12$</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.3rem] text-[#47b9c3]'>Blistered Shishito Peppers</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Charcoal Grilled, Togarashi, Creamy Miso Sauce</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>12$</div>
    </div></>,
    // Add more snack items as needed
  ],
  sides: [
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
    <div className='font-summer text-[3rem] text-[#47b9c3]'>12$</div>
    </div></>,
    // Add more snack items as needed
  ],
  entrees: [
   <><div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.1rem] text-[#47b9c3]'>North Africa Spiced Salmon</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Wild Caught Salmon, Saffron Chermoula Sauce, over Creamy Cauliflower with Nigella Seeds</div>
    <div className='font-summer text-[3rem] text-[#47b9c3]'>12$</div>
    </div></>,
    <><div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[2.8rem] text-[#47b9c3]'>Manuka Honey Roasted Chicken</div>
    <div className='font-gt uppercase mb-2 text-[1.2rem] text-[#dbe7e8]'>Lorem epsum, menu item descriptions. Yum Yum. Lorem, lorem epsum. Lorem</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>12$</div>
    </div></>,
    <><div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[4rem] text-[#47b9c3]'>item c</div>
    <div className='font-gt uppercase mb-2 text-[1.2rem] text-[#dbe7e8]'>Lorem epsum, menu item descriptions. Yum Yum. Lorem, lorem epsum. Lorem</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>12$</div>
    </div></>,
    <><div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[4rem] text-[#47b9c3]'>item d</div>
    <div className='font-gt uppercase mb-2 text-[1.2rem] text-[#dbe7e8]'>Lorem epsum, menu item descriptions. Yum Yum. Lorem, lorem epsum. Lorem</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>12$</div>
    </div></>,
    <><div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[4rem] text-[#47b9c3]'>item e</div>
    <div className='font-gt uppercase mb-2 text-[1.2rem] text-[#dbe7e8]'>Lorem epsum, menu item descriptions. Yum Yum. Lorem, lorem epsum. Lorem</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>12$</div>
    </div></>,
    <><div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[4rem] text-[#47b9c3]'>item f</div>
    <div className='font-gt uppercase mb-2 text-[1.2rem] text-[#dbe7e8]'>Lorem epsum, menu item descriptions. Yum Yum. Lorem, lorem epsum. Lorem</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>12$</div>
    </div></>,
    // Add more entree items as needed
  ],
};

const CateringSubmenu = () => {
  const [activeMenu, setActiveMenu] = useState('snacks');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="h-max flex flex-col items-center justify-center mt-[4rem]">
         <div className='text-[#e3b505] font-poppins mb-10'>Catering Menu Changes Based On Season</div>
         <div className='text-[#47b9c3] font-gt text-[3rem] uppercase mb-2'>Simple Package</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>Choose 2 Small Bites, Choose 2 Entrees</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>(1 Vegan Entree Column Choice / 1 Protein Entree Column Choice)</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>25$ a Person</div>
         <div className='text-[#47b9c3] font-gt text-[3rem] uppercase mb-2'>Vegan Heavy Package</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>Choose 3 Small Bites, Choose 3 Entrees</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>(2 Vegan Column Choices / 1 Protein Column Choice)</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>30$ a Person</div>
         <div className='text-[#47b9c3] font-gt text-[3rem] uppercase mb-2'>Protein Heavy Package</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>Choose 3 Small Bites, Choose 3 Entrees</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>(1 Vegan Column Choices / 2 Protein Column Choice)</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>35$ a Person</div>
         <div className='text-[#47b9c3] font-gt text-[3rem] uppercase mb-2'>Whole Package</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>Choose 4 Small Bites, Choose 4 Entrees</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>(2 Vegan Column Choices / 2 Protein Column Choices)</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>40$ a Person</div>
      <div className="flex space-x-4 font-gt text-[3rem] uppercase">
        <div
          className={`cursor-pointer text-[#dbe7e8] ${
            activeMenu === 'snacks' ? 'text-[#e3b505]' : ''
          }`}
          onClick={() => handleMenuClick('snacks')}
        >
          Small Bites
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
        <div className='text-[#dbe7e8] pb-2'>|</div>
        <div
          className={`cursor-pointer text-[#dbe7e8] ${
            activeMenu === 'sides' ? 'text-[#e3b505]' : ''
          }`}
          onClick={() => handleMenuClick('sides')}
        >
          Handhelds
        </div>
      </div>
      <AnimateSharedLayout type="crossfade">
        <motion.div layout className="mt-4 grid grid-cols-2">
          {menuItems[activeMenu].map((item, index) => (
            <motion.div
              key={item}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-[36rem] h-[16rem] border border-[2px] border-[#e3b505] my-[5rem] mx-[8rem] text-center items-center p-2"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </AnimateSharedLayout>
    </div>
  );
};

export default CateringSubmenu;
