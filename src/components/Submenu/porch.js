import React, { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';

const menuItems = {
  snacks: [
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.8rem] text-[#47b9c3]'>Smoked Pastrami Sandwich</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>House Cured, "Olive My Pickle" Caraway Kraut, Fermented 1000 Island, Gruyere, on Rye, Served with Nashville Sweet Potato Chips</div>
    <div className='font-gt text-[3rem] text-[#e3b505]'>16$</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.8rem] text-[#47b9c3]'>Pickled Cauliflower Po' Boy (Vegan)</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Vegan Remoulade, Garlic Confit, Paprika Oil, Shredduce, Tomato, Served with Nashville Sweet Potato Chips</div>
    <div className='font-gt text-[3rem] text-[#e3b505]'>14$</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[4rem] text-[#47b9c3]'>Kimchi Grilled Cheese</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>"Olive My Pickle Kimchi", Gochujang Aioli, Mozzarella & Provolone, Served with Nashville Sweet Potato Chips</div>
    <div className='font-gt text-[3rem] text-[#e3b505]'>13$</div>
    </div></>,
    <>
     <div className='p-1'>
     <div className='font-gt uppercase mb-2 text-[3.8rem] text-[#47b9c3]'>Vegan Walking Taco (Vegan)</div>
     <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Vegan Chorizo Chili, Arbol Aioli, Avocado Lime Crema, Almond "Cotija", Cilantro, over Yellow Corn Chips</div>
     <div className='font-gt text-[3rem] text-[#e3b505]'>13$</div>
     </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.8rem] text-[#47b9c3]'>Lemongrass Chicken Satay (GF)</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Curry Peanut Sauce, Thai Basil Oil, Pickled Cucumber Slaw</div>
    <div className='font-gt text-[3rem] text-[#e3b505]'>11$</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.8rem] text-[#47b9c3]'>Oyster Mushroom Satay (Vegan)</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Son & Skye Oyster Mushrooms, Soy Marinade, Yakitori BBQ Sauce, Garlic Crunch, Pickled Cucumber Slaw </div>
    <div className='font-gt text-[3rem] text-[#e3b505]'>11$</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.8rem] text-[#47b9c3]'>Brussel Sprouts (Vegan) (GF)</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Almond Chimichurri, Umaro Vegan Bacon Bits</div>
    <div className='font-gt text-[3rem] text-[#e3b505]'>6$</div>
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

const PorchSubmenu = () => {
  const [activeMenu, setActiveMenu] = useState('snacks');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="h-max flex flex-col items-center justify-center md:mt-[30rem] mt-[8rem]">
         <div className='text-[#dbe7e8] font-poppins mb-2'>Porch Fest 2023</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>12pm - Sold Out!</div>
      <div className="flex space-x-4 font-gt text-[3rem] uppercase">
        <div
          className={`cursor-pointer text-[#dbe7e8] ${
            activeMenu === 'snacks' ? 'text-[#e3b505]' : ''
          }`}
          onClick={() => handleMenuClick('snacks')}
        >
          Porch Fest Menu
        </div>
        {/* <div className='text-[#dbe7e8] pb-2'>|</div> */}
        {/* <div
          className={`cursor-pointer text-[#dbe7e8] ${
            activeMenu === 'handhelds' ? 'text-[#e3b505]' : ''
          }`}
          onClick={() => handleMenuClick('handhelds')}
        >
          Handhelds
        </div> */}
        {/* <div className='text-[#dbe7e8] pb-2'>|</div>
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
        </div> */}
      </div>
      <AnimateSharedLayout type="crossfade">
        <motion.div layout className="md:mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
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

export default PorchSubmenu;
