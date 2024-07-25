// src/components/HoveringImageButton.jsx
import React from 'react';
import { motion } from 'framer-motion';
import milk from '../../assets/images/milkBreadOrder.png';
import './styles.css';

const HoveringImageButton = () => {
  const handleButtonClick = () => {
    window.location.href = '/milkbread';
  };

  return (
    <motion.div 
      className="mr-2 md:mt-8 flex items-center justify-center"
      onClick={handleButtonClick}
      style={{ animation: 'sway 5s infinite' }}
   
    >
      <motion.img 
        src={milk} 
        alt="Hovering Button"
        className="cursor-pointer w-[6.2rem] md:w-[13rem]"
        initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2.5, duration: 1,
        
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
