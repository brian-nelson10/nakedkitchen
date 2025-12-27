// src/components/HoveringImageButton.jsx
import React from 'react';
import { motion } from 'framer-motion';
import milk from '../../assets/images/tealOrangeDudeWhite.png';
import './styles.css';

const HoveringImageButton = () => {
  const handleButtonClick = () => {
    window.location.href = '/order';
  };

  return (
    <motion.div 
      className="mr-2 mt-2 md:mt-8 flex items-center justify-center"
      onClick={handleButtonClick}
      style={{ animation: 'sway 5s infinite' }}
   
    >
      <motion.img 
        src={milk} 
        alt="Hovering Button"
        className="cursor-pointer w-[5rem] md:w-[16rem]"
        initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2.8, duration: 1,
        
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        } }}
      />
    </motion.div>
  );
};

export default HoveringImageButton;
