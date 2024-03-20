import React, { useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';

const menuItems = {
  snacks: [
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[4rem] text-[#47b9c3]'>Crispy Deviled Eggs</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Crispy Egg White, Chili Crunch, Chives</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>Vegetarian</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.5rem] text-[#47b9c3]'>Nduja Crostini</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Calabrian Chili Spreadable Sausage, Pickled Celery, Lemon Zest</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>Protein</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.3rem] text-[#47b9c3]'>Lemongrass Chicken Satay</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Marinated Chicken Thigh, Cilantro Oil, Thai Curry Peanut Sauce</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>Protein</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.5rem] text-[#47b9c3]'>Korean Rice Cake Satay (Tteokbokki)</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Thai Curry Marinade, Gochujang Aioli, Charcoal Grilled </div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>Vegan</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.7rem] text-[#47b9c3]'>Mini Peruvian Pesto Pasta (Tallarines Verdes)</div>
    <div className='font-poppins mb-2 text-[1rem] text-[#dbe7e8]'>Bucatini, Basil Pesto, Pickled Shallot, Almond Chimichurri, Queso Fresco</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>Vegtarian</div>
    </div></>,
      <>
      <div className='p-1'>
      <div className='font-gt uppercase mb-2 text-[3.7rem] text-[#47b9c3]'>Mini Thai Chop Salad With Prawn</div>
      <div className='font-poppins mb-2 text-[1rem] text-[#dbe7e8]'>Mango Kombucha Dressing, Chopped Super Greens, Almond Chimichurri, Crunchy Quinoa, Gochujang</div>
      <div className='font-summer text-[3rem] text-[#e3b505]'>Protein</div>
      </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.3rem] text-[#47b9c3]'>Blistered Shishito Peppers</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Charcoal Grilled, Kimchi Ranch, Frisee, Togarashi</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>Vegan</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.3rem] text-[#47b9c3]'>Bulgogi Udon Bowl</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Bulgogi Oyster Mushrooms or Shrimp or Pork Belly or Fried Egg, Stir Fry Udon, Kimchi, Pickled Veggies, Green Onion, Cilantro, Gochujang</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>Vegan / Vegetarian / Protein</div>
    </div></>,
    // Add more snack items as needed
  ],
  handhelds: [
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3rem] text-[#47b9c3]'>Kimchi Grilled Cheese</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Olive my Pickle Kimchi, Gochujang Aioli, Mozzarella, Gruyere</div>
    <div className='font-summer text-[3rem] text-[#47b9c3]'>Protein Choice </div>
    </div>
   </>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[2.3rem] text-[#47b9c3]'>Pork Belly Sliders</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Korean BBQ, Cilantro Mayo, Quickles</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>Protein Choice</div>
    </div></>,
    <>
     <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[2.7rem] text-[#47b9c3]'>The Patty Melt</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Two Smash Patties, Organic American Cheese, Grilled Onions, Fermented 1000 Island, on Sourdough</div>
    <div className='font-summer text-[3rem] text-[#47b9c3]'>Protein Choice</div>
    </div>
    </>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3rem] text-[#47b9c3]'>Pickled Cauliflower Po' Boy</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Crispy Pickled Cauliflower, Vegan Remoulade, Garlic Confit, Shredduce, Marinated Tomato</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>Vegan Choice</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[4rem] text-[#47b9c3]'>Tofu Bahn Mi</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Cilantro Marinated Tofu, Pickled Cucumber Slaw, Charred Jalepeno Mayo, Cilantro </div>
    <div className='font-summer text-[3rem] text-[#47b9c3]'>Vegan Choice</div>
    </div></>,
    <>
    <div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3.3rem] text-[#47b9c3]'>Oyster Mushroom Po' Boy</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Son & Skye Blue Oyster Mushrooms Cornmeal Fried, Vegan "Mississippi Comeback" Sauce, Cabbage Slaw</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>Vegan Choice</div>
    </div></>,
  ],
  // sides: [
  //   <>
  //   <div className='p-1'>
  //   <div className='font-gt uppercase mb-2 text-[4rem] text-[#47b9c3]'>Roasted Winter Root Vegetables (GF) (V)</div>
  //   <div className='font-poppins uppercase mb-2 text-[1.2rem] text-[#dbe7e8]'>Honey, Thyme, Almond Gremolata (Vegan Substitute Maple Syrup)</div>
  //   <div className='font-summer text-[3rem] text-[#47b9c3]'>13$ for 1/2 Pan</div>
  //   </div></>,
  //   <>
  //   <div className='p-1'>
  //   <div className='font-gt uppercase mb-2 text-[4rem] text-[#47b9c3]'>Duck Fat Fingerling Potatoes (GF)</div>
  //   <div className='font-poppins uppercase mb-2 text-[1.2rem] text-[#dbe7e8]'>Heirloom Fingerling Potatoes, Duck Fat Confit, Herbs</div>
  //   <div className='font-summer text-[3rem] text-[#47b9c3]'>15$ for 1/2 Pan</div>
  //   </div></>,
  //   <>
  //   <div className='p-1'>
  //   <div className='font-gt uppercase mb-2 text-[3rem] text-[#47b9c3]'>Roasted Brussels with Squash & Vegan Bacon(GF)(V)</div>
  //   <div className='font-poppins uppercase mb-2 text-[1.2rem] text-[#dbe7e8]'>Brussels tossed in vegan lemon butter, Roasted Kabocha Squash, topped with vegan bacon crumble</div>
  //   <div className='font-summer text-[3rem] text-[#47b9c3]'>15$ for 1/2 Pan</div>
  //   </div></>,
  //     <>
  //     <div className='p-1'>
  //     <div className='font-gt uppercase mb-6 text-[4rem] text-[#47b9c3]'>Green Rice (GF) (V)</div>
  //     <div className='font-poppins uppercase mb-6 text-[1.2rem] text-[#dbe7e8]'>Jasmine Rice, Vegan Basil Pesto, Feta Cheese (optional)</div>
  //     <div className='font-summer text-[3rem] text-[#47b9c3]'>13$ for 1/2 Pan</div>
  //     </div></>,
  //   <>
  //   <div className='p-1'>
  //   <div className='font-gt uppercase mb-2 text-[3.5rem] text-[#47b9c3]'>Brussel Sprouts Caeser (GF) (Veg)</div>
  //   <div className='font-poppins uppercase mb-2 text-[1.2rem] text-[#dbe7e8]'>Super thin sliced brussels, garlic crumbs, Shaved Parmigiano Reggiano</div>
  //   <div className='font-summer text-[3rem] text-[#47b9c3]'>13$ for 1/2 Pan</div>
  //   </div></>,
  //   <>
  //   <div className='p-1'>
  //   <div className='font-gt uppercase mb-2 text-[3rem] text-[#47b9c3]'>Stewed Collards with Parmigiano Rind (GF) (Veg)</div>
  //   <div className='font-poppins uppercase mb-2 text-[1.2rem] text-[#dbe7e8]'>Slow Stewed Collards, Rosemary, Root Vegetables, Parmigiano Rind</div>
  //   <div className='font-summer text-[3rem] text-[#47b9c3]'>15$ for 1/2 Pan</div>
  //   </div></>,
  //   // Add more snack items as needed
  // ],
  entrees: [
    <><div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3rem] text-[#47b9c3]'>Butternut Squash Cream Tortellini</div>
    <div className='font-poppins mb-1 text-[1.2rem] text-[#dbe7e8]'>3 Cheese Filled Tortellini, Fried sage, Vegan Umaro Bacon Crumble(Vegetarian)</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>Vegan Choice</div>
    </div></>,
    <><div className='p-1'>
    <div className='font-gt uppercase mb-4 mt-4 text-[2.8rem] text-[#47b9c3]'>Sunchoke & Grilled Tomato Pappardelle</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Sunchoke "Cream" and Grilled Tomato Sauce, Swiss Chard, Basil Leaves, Chili Crunch.</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>Vegan Choice</div>
    </div></>,
    <><div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3rem] text-[#47b9c3]'>Manuka Honey Roasted Chicken</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Lemongrass & Herb Marinated Free Range Chicken, Manuka Honey Glaze, Green Goddess Olive Oil, Chili Crunch, over Green Rice.</div>
    <div className='font-summer text-[3rem] text-[#47b9c3]'>Protein Choice</div>
    </div></>,
    <><div className='p-1'>
    <div className='font-gt uppercase mb-4 mt-4 text-[2.8rem] text-[#47b9c3]'>Pesto "Cream" Campanelle with Romesco</div>
    <div className='font-poppins mb-3 text-[1.2rem] text-[#dbe7e8]'>Vegan Pesto "Cream", Roasted Romesco, Garlic Confit, Almond Gremolata, Garlic Crumbs</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>Vegan Choice</div>
    </div></>,
    <><div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[2.7rem] text-[#47b9c3]'>Spicy Pot Roast with Blood Oranges & Winter Vegetables</div>
    <div className='font-poppins mb-1 text-[1.2rem] text-[#dbe7e8]'>24 Hour Braised Short Rib with Calabrian Chile, San Marzano Tomatoes and Local Blood Oranges. Stewed with Sweet Potato, Rutabaga, Parsnips, Carrots & Celery. Served with Crusty French Baguette.</div>
    <div className='font-summer text-[3rem] text-[#47b9c3]'>Protein Choice</div>
    </div></>,
    <><div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3rem] text-[#47b9c3]'>Cauliflower Steak Au Poivre</div>
    <div className='font-poppins mb-1 text-[1.2rem] text-[#dbe7e8]'>Vegan Peppercorn & Brandy "Cream" Sauce, Almond Gremolata, Garlic Confit, Chili Crunch, Herbs. Served over Rosemary Fingerling Potatoes.</div>
    <div className='font-summer text-[3rem] text-[#e3b505]'>Vegan Choice</div>
    </div></>,
    <><div className='p-1'>
    <div className='font-gt uppercase mb-2 text-[3rem] text-[#47b9c3]'>North Africa Spiced Salmon</div>
    <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Wild Caught Salmon, Saffron Chermoula Sauce, over Creamy Cauliflower with Nigella Seeds</div>
    <div className='font-summer text-[3rem] text-[#47b9c3]'>Protein Choice</div>
    </div></>,
     <><div className='p-1'>
     <div className='font-gt uppercase mb-2 text-[3rem] text-[#47b9c3]'>Winter Panang Curry</div>
     <div className='font-poppins mb-2 text-[1.2rem] text-[#dbe7e8]'>Beef or Chicken, Coconut curry broth, Butternut Squash, Spinach, Shallots, Cilantro, Pumpkin Seed Crunch, Chili Oil (Can be made Vegan)</div>
     <div className='font-summer text-[3rem] text-[#47b9c3]'>Protein Choice</div>
     </div></>
    // Add more entree items as needed
  ],
};

const CateringSubmenu = () => {
  const [activeMenu, setActiveMenu] = useState('snacks');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="h-max flex flex-col items-center text-center justify-center mt-[4rem] bg-[#020202] bg-opacity-75">
         <div className='text-[#e3b505] font-poppins mb-10'>Catering Menu Changes Based On Season</div>
         {/* <div className='text-[#47b9c3] font-gt text-[3rem] uppercase mb-2'>Simple Package</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>Choose 2 Small Bites, Choose 2 Entrees, Choose 1 Side</div>
         <div className='text-[#dbe7e8] text-center font-poppins mb-2'>(1 Vegan Entree Column Choice / 1 Protein Entree Column Choice)</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>25$ a Person</div>
         <div className='text-[#47b9c3] font-gt text-[3rem] uppercase mb-2'>Lunch Package</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>Choose 2 Small Bites, Choose 2 Handhelds</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>(1 Vegan Entree Column Choice / 1 Protein Entree Column Choice)</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>Each Handheld served with Choice of Sweet Potato Chips Or Simple Salad</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>25$ a Person</div>
         <div className='text-[#47b9c3] font-gt text-[3rem] uppercase mb-2'>Vegan Heavy Package</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>Choose 3 Small Bites, Choose 3 Entrees, Choose 1 Side</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>(2 Vegan Column Choices / 1 Protein Column Choice)</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>30$ a Person</div>
         <div className='text-[#47b9c3] font-gt text-[3rem] uppercase mb-2'>Protein Heavy Package</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>Choose 3 Small Bites, Choose 3 Entrees, Choose 1 Side</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>(1 Vegan Column Choices / 2 Protein Column Choice)</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>35$ a Person</div>
         <div className='text-[#47b9c3] font-gt text-[3rem] uppercase mb-2'>Whole Package</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>Choose 4 Small Bites, Choose 4 Entrees, Choose 2 Sides</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>(2 Vegan Column Choices / 2 Protein Column Choices)</div>
         <div className='text-[#dbe7e8] font-poppins mb-2'>40$ a Person</div> */}
      <div className="flex flex-col space-x-4 font-gt text-[3rem] uppercase">
        <div className='text-[3rem] font-poppins text-[#47b9c3]'>Select a Category Below</div>
        <div
          className={`cursor-pointer text-[#dbe7e8] ${
            activeMenu === 'snacks' ? 'text-[#e3b505]' : ''
          }`}
          onClick={() => handleMenuClick('snacks')}
        >
          Provisions
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
        {/* <div className='text-[#dbe7e8] pb-2'>|</div> */}
        {/* <div
          className={`cursor-pointer text-[#dbe7e8] ${
            activeMenu === 'sides' ? 'text-[#e3b505]' : ''
          }`}
          onClick={() => handleMenuClick('sides')}
        >
          Sides
        </div> */}
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
