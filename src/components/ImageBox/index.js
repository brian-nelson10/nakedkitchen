import React from 'react';
import { motion } from 'framer-motion';
import image from "../../assets/images/wall5.jpg"

const ImageBox = () => {
  return (
    <div className="md:w-[45rem] md:h-[57rem] border border-black">
      <motion.img 
        initial={{opacity: 0, x: 200}}
        whileInView={{opacity: 1, x: 0, transition: {duration: .8, delay: .2}}}
        src={image} alt="a cool of food" className="md:w-[45rem] md:h-[57rem] h-[25rem]" />
    </div>
  );
};

export default ImageBox;
