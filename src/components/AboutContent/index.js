import React from 'react';
import { motion } from 'framer-motion';
import './styles.css'; // Import the CSS file
import WritingText from '../WritingText';

const AboutContent = () => {

  return (
    <>
    <div className="border-t-[1.4rem] border-b-[1.4rem] border-black parallax-container bg-fixed grid grid-rows-2 p-4">
      <motion.p
        className="parallax-text text-[3rem] md:text-[8rem] -mt-[20rem] md:-mb-[30rem] text-[#FFFF] font-benditos"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: [0,.25,.5,1], y: 0 }}
        transition={{ duration: 0.6, delay: .25 }}
      >
        Phoenix Arts & Innovation District
      </motion.p>
      <motion.p
      className="parallax-text text-[#FFFF] text-[1rem] md:text-[1.5rem] -mt-[30rem] md:-mt-[40rem] font-poppins p-6 md:p-[3rem] m-1 md:m-2 bg-black bg-opacity-50 rounded-xl"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: [0,.25,.5,1], y: 0 }}
      transition={{ duration: 0.6, delay: .25 }}>
         With a footprint that now spans over eight acres, PHX JAX, co-created with a community of creatives and residents, 
         is where we would like to introduce our vibrant addition, Naked Kitchen. The goal within this innovative district is to reinvigorate artistic livelihoods, 
         boost local economies, and foster business opportunities for nearby companies. Nested within the PHX JAX District, Naked Kitchen brings a unique touch to the urban center, 
         offering clean, healthy, scratch food that does not lack in creativity or flavor. As we embark on this creative journey, within the PHX JAX district envision pocket parks, 
         studios, housing, offices, apartments, food and beverage havens, event spaces, galleries, and, of course, the delicious offerings of Naked Kitchen throughout the entire property. 
         Join us in celebrating a new era of community and creativity at PHX JAX and the enticing addition of Naked Kitchen.
      </motion.p>
    </div>
    {/* <div className='border-b-[1.4rem] border-black parallax-container2 bg-fixed grid grid-rows-2 p-4'>
    <motion.p
        className="parallax-text text-[3rem] md:text-[8rem] -mt-[20rem] md:-mb-[30rem] text-[#FFFF] font-gt"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: [0,.25,.5,1], y: 0 }}
        transition={{ duration: 0.6, delay: .25 }}
      >
        "Cooking With Conscience”
      </motion.p>
      <motion.p
      className="parallax-text text-[#FFFF] text-[1rem] md:text-[1.5rem] -mt-[30rem] md:-mt-[40rem] font-poppins p-6 md:p-[3rem] m-1 md:m-2 bg-black bg-opacity-50 rounded-xl"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: [0,.25,.5,1], y: 0 }}
      transition={{ duration: 0.6, delay: .25 }}>
         Wholesome, Honest Cooking: Our cuisine is meticulously crafted from scratch, using only real, unprocessed ingredients, for a wholesome dining experience. Our diverse menu thoughtfully caters to various dietary preferences, highlighting an array of plant-based components used seemlessly with your usual favorites. We wholeheartedly embrace a holistic approach to dining that reflects our deep respect for the environment. At our restaurant, our identity is defined by our commitment to offering nourishing, sustainable, and naturally delectable food choices.


      </motion.p>
    </div> */}
    </>
  );
};

export default AboutContent;
