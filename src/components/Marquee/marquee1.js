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

const Marquee1 = () => {
  return (
    <div> 
      <div className="marquee relative h-[210px]" >
        <motion.div
          className="track overflow-hidden"
          variants={marqueeVariants}
          animate="animate"
        >
          <div className="font-gt text-[9rem] uppercase text-[#1b3d38]">
            Our Mission. Our Mission. Our Mission. Our Mission. Our Mission. Our Mission. Our Mission. Our Mission. Our Mission. Our Mission.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee1;