import React from 'react';
import { motion } from 'framer-motion';
import './styles.css'; // Import the CSS file

const AboutContent = () => {

  return (
    <div className="border-t-[1.4rem] border-b-[1.4rem] border-black parallax-container bg-fixed grid grid-rows-2 p-4">
      <motion.p
        className="parallax-text text-[3rem] md:text-[8rem] text-[#FFFF] font-gt"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: [0,.25,.5,1], y: 0 }}
        transition={{ duration: 0.6, delay: .25 }}
      >
        Phoenix Arts & Innovation District
      </motion.p>
      <motion.p
      className="parallax-text text-[#FFFF] text-[1rem] md:text-[2.1rem] font-bold font-poppins p-6 md:p-[3rem] m-1 md:m-2 strokeSmall bg-black bg-opacity-50 rounded-xl"
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
  );
};

export default AboutContent;