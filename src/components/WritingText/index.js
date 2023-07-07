import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const WritingText = () => {
  const [writtenText, setWrittenText] = useState('');
  const text = 'We Serve Our Food The Way It Should Be.. Naked.';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY -2;
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
    <div className="h-[200vh] w-[58rem] justify-center text-center bg-white">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-[9.5rem] text-[#db00b6] font-xtreem leading-[8rem]"
      >
        {writtenText}
      </motion.p>
    </div>
  );
};

export default WritingText;
