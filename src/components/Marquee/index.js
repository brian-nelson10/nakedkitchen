import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    const handleScroll = () => {
      setDirection(window.scrollY > 100 ? 'left' : 'right');
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="marquee-container">
      <motion.div
        className="marquee"
        style={{
          flexDirection: direction === 'right' ? 'row' : 'row-reverse',
        }}
        animate={{ x: direction === 'right' ? '-100%' : '100%' }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="font-mentra text-[9.5rem] -mt-[19rem] text-white pl-[] text-end">
          {/* Place your marquee content here */}
          Naked Kitchen
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
