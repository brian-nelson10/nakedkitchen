import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const WritingText = () => {
  const [writtenText, setWrittenText] = useState('');
  const text = 'Coming Soon!';
 
  useEffect(() => {
   
    const handleScroll = () => {
      const scrollPosition = (window.pageYOffset / 2.5) ;
      const textLength = text.length;
      const visibleTextLength = Math.floor((scrollPosition / window.innerHeight) * textLength);
      const visibleText = text.slice(0, visibleTextLength);
      setWrittenText(visibleText);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-[62rem] justify-center text-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .1 }}
        className="text-[12rem] text-[#db00b6] font-xtreem leading-[9rem]"
      >
        {writtenText}
      </motion.p>
    </div>
  );
};

export default WritingText;
