import React, { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';

const menuItems = {
  snacks: [
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[4rem] text-[#47b9c3]'>Bahn Mi</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>5 Spice Tofu, Hoisin BBQ, Charred Jalapeno Mayo, Pickled Cucumber Slaw, Cilantro, Pickled Jalapeno</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>Vegan</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.5rem] text-[#47b9c3]'>Smoked Pastrami on Rye</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>House Cured Brisket, Olive My Pickle Kraut, Fermented 1000 Island, Gruyere</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'></div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.3rem] text-[#47b9c3]'>Kimchi Grilled Cheese</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Gochujang Mayo, Olive My Pickle Kimchi, Mozzarella</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>Vegetarian</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.5rem] text-[#47b9c3]'>Crispy Deviled Eggs</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Chili Crunch, Chives </div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>Vegetarian</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.7rem] text-[#47b9c3]'>Brussels Sprouts</div>
    <div className='font-poppins mb-2 text-[1rem] text-[#dbe7e8]'>Kung Pao Sauce, Gochujang Mayo, Almond Chimichurri</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>Vegan</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.3rem] text-[#47b9c3]'>Seared Gnocchi</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Butternut Squash Cream, Fried Sage</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>Vegetarian</div>
    </div></>,
    // Add more snack items as needed
  ]
};

const PopUpSubmenu = () => {
  const [activeMenu, setActiveMenu] = useState('snacks');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="h-max flex flex-col items-center text-center justify-center mt-[4rem]">
         <div className='text-[#e3b505] font-poppins mb-10 bg-black p-2 bg-opacity-75 rounded-lg'>Pop Up Menu Changes Very Often!</div>
         {/* <div className='text-[#47b9c3] font-gt text-[3rem] uppercase mb-2'>Simple Package</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>Choose 2 Small Bites, Choose 2 Entrees, Choose 1 Side</div>
         <div className='text-[#dbe7e8] text-center font-poppins mb-2'>(1 Vegan Entree Column Choice / 1 Protein Entree Column Choice)</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>25$ a Person</div> */}
         
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
              className=" border border-[2px] border-[#e3b505] my-5 mx-1 md:w-[36rem] lg:w-[36rem] text-center items-center p-2 bg-black bg-opacity-75"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </AnimateSharedLayout>
    </div>
  );
};

export default PopUpSubmenu;
