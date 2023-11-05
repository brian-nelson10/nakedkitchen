import React, { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';

const menuItems = {
  snacks: [
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[4rem] text-[#47b9c3]'>Vegan Turkey</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Crispy "Skin" Herbed Tofu Turkey, Topped with Savory Mushroom Ragout Sauce, on a bed of roasted veggies and herbs.</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.5rem] text-[#47b9c3]'>Whole Roasted Cauliflower Au Poivre</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Vegan Au Poivre Cream Sauce, Garlic Confit, Chili Crunch, Almond Gremolata, on a bed of roasted onions and herbs. </div>
   
    </div></>,
  ],
  entrees: [
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[2.3rem] text-[#47b9c3]'>Sweet Potato Mash</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Brown Sugar Crumble, Vegan Butter</div>

    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[2.7rem] text-[#47b9c3]'>Vegan Mac and Cheese</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Creamy Mac and Cheese, Crunchy Vegan Bacon Bread Crumbs</div>
   
    </div></>
  ],
  handhelds: [
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[2.7rem] text-[#47b9c3]'>Green Bean Casserole</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Fresh French Green Beans, Local Mushroom Gravy, Fried Onions</div>
   
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[2.3rem] text-[#47b9c3]'>Butternut Squash Curry</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Butternut Squash, Spinach, Shallots, Coconut Curry Broth, Pumpkin Seed Crunch</div>

    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[2.7rem] text-[#47b9c3]'>Roasted Root Vegetables</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Maple Glaze, Thyme, Roasted Almonds, Carrots, Rutabaga, Turnips, Parsnips, Celery Root</div>
   
    </div></>,
    // Add more entree items as needed
  ],
};

const ThanksgivingSubmenu = () => {
  const [activeMenu, setActiveMenu] = useState('snacks');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="h-max flex flex-col items-center text-center justify-center mt-[4rem]">
         <div className='text-[#e3b505] font-poppins mb-4'>Vegan Thanksgiving Take Home Kits</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>Substitute a Real Turkey or Add it on!</div>
         <div className='text-[#e3b505] font-poppins mb-4 '>Feeds a Family of 4</div>
         <div className='text-[#e3b505] font-poppins mb-10'>Comes with Chef instructions and all the fixins!</div>
         <div className='text-[#47b9c3] font-gt text-[3rem] uppercase mb-2'>$175$</div>
         <div className='text-[#47b9c3] font-gt text-[3rem] uppercase mb-2'>Main Entree</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>Choose 1</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>Sub a Real Turkey or Add it on for $55!</div>
         <div className='text-[#dbe7e8] text-center font-poppins mb-2'></div>
         <div className='text-[#47b9c3] font-gt text-[3rem] uppercase mb-2'>Starches</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>Sweet Potato Mash / Vegan Mac & Cheese</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'></div>
         <div className='text-[#47b9c3] font-gt text-[3rem] uppercase mb-2'>Classic Sides</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>Choose 2</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'></div>
         <div className='text-[#47b9c3] font-gt text-[3rem] uppercase mb-2'>Fixins</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>Included in your kit</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>Cranberry Sauce, Vegan Stuffing, Extra seasoning, Vegan Butter</div>
         <div className='text-[#47b9c3] font-gt text-[3rem] uppercase mb-2'>Vegan Pie Add On's</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>Spiced Pumpkin Pie or Spiced Apple Pie</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>Comes with Vegan Whipped Cream and Monkfruit Powdered Sugar</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>15$ Each 25$ for Both</div>
      <div className="flex flex-col md:flex-row space-x-4 font-gt text-[3rem] uppercase">
        <div
          className={`cursor-pointer text-[#dbe7e8] ${
            activeMenu === 'snacks' ? 'text-[#e3b505]' : ''
          }`}
          onClick={() => handleMenuClick('snacks')}
        >
          Main Entree
        </div>
        <div className='text-[#dbe7e8] pb-2'>|</div>
        <div
          className={`cursor-pointer text-[#dbe7e8] ${
            activeMenu === 'entrees' ? 'text-[#e3b505]' : ''
          }`}
          onClick={() => handleMenuClick('entrees')}
        >
          Starches
        </div>
        <div className='text-[#dbe7e8] pb-2'>|</div>
        <div
          className={`cursor-pointer text-[#dbe7e8] ${
            activeMenu === 'handhelds' ? 'text-[#e3b505]' : ''
          }`}
          onClick={() => handleMenuClick('handhelds')}
        >
          Classic Sides
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
              className=" border border-[2px] border-[#e3b505] my-5 mx-1 md:w-[36rem] lg:w-[36rem] text-center items-center p-2"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </AnimateSharedLayout>
    </div>
  );
};

export default ThanksgivingSubmenu;
