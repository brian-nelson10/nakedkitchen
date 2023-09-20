import React from 'react';
import { motion } from 'framer-motion';
import hero from "../../assets/images/wall5.jpg"

const TwoColumn = () => {
  return (
    <div className="mx-[1rem] mb-[5rem]">
     <div className="w-[45rem] h-[57rem] border border-black">
      <motion.img 
        initial={{opacity: 0, x: -200}}
        whileInView={{opacity: 1, x: 0, transition: {duration: .8, delay: .2}}}
        src={hero} alt="a cool of food" className="w-[45rem] h-[57rem]" />
    </div>
      <div className="w-full md:w-1/2 p-4 mr-[8rem] justify-items-start items-center">
        <h1 className="text-[6rem] font-bold mb-4 font-gt uppercase">A Glass of Love Never Killed Nobody</h1>
        <p className="text-lg border border-black p-6 m-4 w-[32rem] h-[20rem] font-poppins">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          euismod urna ut sagittis efficitur. Fusce eu mauris eu metus
          sollicitudin luctus nec at massa. Integer vitae velit sit amet mi
          fringilla varius nec in libero. Phasellus in justo eu sem dictum
          rhoncus.
        </p>
      </div>
    </div>
  );
};

export default TwoColumn;
