import React from 'react';
import { motion } from 'framer-motion';


const IntroAnimation = () => {
  const words = ['Naked',' ', 'Kitchen'];

  const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
          opacity: 1,
          transition: { staggerChildren: .08, delayChildren: 1.1 * i },
      }),
      exit: {opacity: 0}
  };
  // Variants for each letter
  const child = {
      visible: {
          opacity: 1,
          x: 0,
          y: [-150, -100, 0],
          transition: {
              type: "spring",
              damping: 100,
              stiffness: 100,
              duration: 3,
          },
      },
      hidden: {
          opacity: 0,
          x: 0,
          y: -150
         },
      exit: {
          opacity: 0,
          x: 0,
          y: -250,
          transition: {
              type: "spring",
              damping: 12,
              stiffness: 100,
              duration: 3,
              timing: [2, 2, 1, 1]
          },
      },
  };
  return (
    <div className="">
       <motion.div
                        
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="font-mentra text-xl w-screen justify-start text-start items-center xl:pl-4 py-5 xl:text-4xl hover:cursor-pointer">
                        {words.map((word, index) => (
                            <motion.span className="tracking-wide text-black hover:cursor-pointer " variants={child} key={index} >
                                {word === " " ? "\u00A0" : word}
                            </motion.span>
                        ))}
                    </motion.div>
    </div>
  );
};

export default IntroAnimation;
