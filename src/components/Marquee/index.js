import React from "react";
import "./styles.css"
import { motion } from "framer-motion";


// 2. Defining Variants
const marqueeVariants = {
  animate: {
    x: [-300, -1050],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 100,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  return (
    <div> 
      <div className="marquee relative overflow-hidden h-[210px]" >
        <motion.div
          className="track overflow-hidden"
          variants={marqueeVariants}
          animate="animate"
        >
          <div className="font-gt text-[9rem] drop-shadow-[6px_6px_0px_#e3b505] md:drop-shadow-[4px_4px_0px_#e3b505] stroke uppercase text-[#F6B092]">
            Our Menu. Our Menu. Our Menu. Our Menu. Our Menu. Our Menu. Our Menu. Our Menu. Our Menu. Our Menu.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;