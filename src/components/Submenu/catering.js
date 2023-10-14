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
  handhelds: [
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[2.7rem] text-[#47b9c3]'>West Coast Pastrami Sandwich</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>House Cured and Smoked, Mustard Seed Crust, Fermented 1000 Island, Olive my Pickle Kraut, Gruyere</div>
    <div className='font-summer text-[3rem] text-[#47b9c3]'>Protein Choice</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[2.3rem] text-[#47b9c3]'>Atlas Monroe Fried Chicken Sandwich</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Famous Atlas Monroe Vegan Chicken Filet, Vegan "Ranch" Mayo, House Pickles</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>Vegan Choice</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3rem] text-[#47b9c3]'>Kimchi Grilled Cheese</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Olive my Pickle Kimchi, Gochujang Aioli, Mozzarella, Gruyere</div>
    <div className='font-summer text-[3rem] text-[#47b9c3]'>Protein Choice </div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3rem] text-[#47b9c3]'>Pickled Cauliflower Po' Boy</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Crispy Pickled Cauliflower, Vegan Remoulade, Garlic Confit, Shredduce, Marinated Tomato</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>Vegan Choice</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[4rem] text-[#47b9c3]'>Pork Belly Bahn Mi</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Snake River Farms "Tocino" Marinated Pork Belly, Pickled Cucumber Slaw, Charred Jalepeno Mayo, Cilantro </div>
    <div className='font-summer text-[3rem] text-[#47b9c3]'>Protein Choice</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.3rem] text-[#47b9c3]'>Oyster Mushroom Po' Boy</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Son & Skye Blue Oyster Mushrooms Cornmeal Fried, Vegan "Mississippi Comeback" Sauce, Cabbage Slaw</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>Vegan Choice</div>
    </div></>,
  ],
  sides: [
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[4rem] text-[#]'>item 1</div>
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
    <div className='font-gt uppercase mb-2 text-[2rem] text-[#47b9c3]'>Kabocha Squash Bolognese</div>
    <div className='font-poppins mb-1 text-[1.2rem] text-[#dbe7e8]'>Japanese Kabocha Squash Sauce with Grass Fed Ground Beef & Azar Ground Sausage, Pappardelle, Parmigiano Reggiano</div>
    <div className='font-summer text-[3rem] text-[#47b9c3]'>Protein Choice</div>
    </div></>,
    <><div className='p-1'>
    <div className='font-gt uppercase mb-4 mt-4 text-[2.1rem] text-[#47b9c3]'>Sunchoke & Grilled Tomato Pappardelle</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Sunchoke "Cream" and Grilled Tomato Sauce, Swiss Chard, Basil Leaves, Chili Crunch.</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>Vegan Choice</div>
    </div></>,
    <><div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[2.8rem] text-[#47b9c3]'>Manuka Honey Roasted Chicken</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Lemongrass & Herb Marinated Free Range Chicken, Manuka Honey Glaze, Green Goddess Olive Oil, Chili Crunch, over Green Rice.</div>
    <div className='font-summer text-[3rem] text-[#47b9c3]'>Protein Choice</div>
    </div></>,
    <><div className='p-1'>
    <div className='font-gt uppercase mb-4 mt-4 text-[2.1rem] text-[#47b9c3]'>Pesto "Cream" Campanelle with Romesco</div>
    <div className='font-poppins mb-3 text-[1.2rem] text-[#dbe7e8]'>Vegan Pesto "Cream", Roasted Romesco, Garlic Confit, Almond Gremolata, Garlic Crumbs</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>Vegan Choice</div>
    </div></>,
    <><div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[1.5rem] text-[#47b9c3]'>Spicy Pot Roast with Blood Oranges & Winter Vegetables</div>
    <div className='font-poppins mb-1 text-[1.2rem] text-[#dbe7e8]'>24 Hour Braised Short Rib with Calabrian Chile, San Marzano Tomatoes and Local Blood Oranges. Stewed with Sweet Potato, Rutabaga, Parsnips, Carrots & Celery. Served with Crusty French Baguette.</div>
    <div className='font-summer text-[3rem] text-[#47b9c3]'>Protein Choice</div>
    </div></>,
    <><div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.1rem] text-[#47b9c3]'>Cauliflower Steak Au Poivre</div>
    <div className='font-poppins mb-1 text-[1.2rem] text-[#dbe7e8]'>Vegan Peppercorn & Brandy "Cream" Sauce, Almond Gremolata, Garlic Confit, Chili Crunch, Herbs. Served over Rosemary Fingerling Potatoes.</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>Vegan Option</div>
    </div></>,
    <><div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.1rem] text-[#47b9c3]'>North Africa Spiced Salmon</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Wild Caught Salmon, Saffron Chermoula Sauce, over Creamy Cauliflower with Nigella Seeds</div>
    <div className='font-summer text-[3rem] text-[#47b9c3]'>Protein Choice</div>
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
    <div className="h-max flex flex-col items-center text-center justify-center mt-[4rem]">
         <div className='text-[#e3b505] font-poppins mb-10'>Catering Menu Changes Based On Season</div>
         <div className='text-[#47b9c3] font-gt text-[3rem] uppercase mb-2'>Simple Package</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>Choose 2 Small Bites, Choose 2 Entrees</div>
         <div className='text-[#dbe7e8] text-center font-poppins mb-2'>(1 Vegan Entree Column Choice / 1 Protein Entree Column Choice)</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>25$ a Person</div>
         <div className='text-[#47b9c3] font-gt text-[3rem] uppercase mb-2'>Lunch Package</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>Choose 2 Small Bites, Choose 2 Handhelds</div>
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
      <div className="flex flex-col md:flex-row space-x-4 font-gt text-[3rem] uppercase">
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
            activeMenu === 'handhelds' ? 'text-[#e3b505]' : ''
          }`}
          onClick={() => handleMenuClick('handhelds')}
        >
          Handhelds
        </div>
        <div className='text-[#dbe7e8] pb-2'>|</div>
        <div
          className={`cursor-pointer text-[#dbe7e8] ${
            activeMenu === 'sides' ? 'text-[#e3b505]' : ''
          }`}
          onClick={() => handleMenuClick('sides')}
        >
          Sides
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

export default CateringSubmenu;
