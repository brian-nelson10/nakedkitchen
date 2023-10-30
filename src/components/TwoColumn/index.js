import React from 'react';
import { motion } from 'framer-motion';
import hero from "../../assets/images/veggiesAlt.jpeg";
import Button from '../Button/button';

const TwoColumn = () => {
  return (
    <div className="grid md:grid-cols-2 mx-[1rem] mb-[5rem] justify-items-center">
      <div className="md:w-[45rem] md:h-[57rem] border border-black">
        <motion.img
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: .8, delay: .2 } }}
          src={hero} alt="a cool of food" className="md:w-[45rem] md:h-[57rem]" />
      </div>
      <div className="md:w-1/2 md:text-end text-center md:-ml-8 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: .8, delay: .1 } }}
            className='font-gt uppercase text-[#1b3d38] text-[5rem] -mb-[3.5rem] '>enhancing</motion.p>
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: .8, delay: .2 } }}
            className='font-gt text-[#1b3d38] uppercase md:text-[5rem] text-[4.5rem] -mb-[3.5rem]'>the welfare</motion.p>
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: .8, delay: .3 } }}
            className='font-gt text-[#1b3d38] uppercase text-[5rem] -mb-[3.5rem]'>of our</motion.p>
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: .8, delay: .4 } }}
            className='font-gt text-[#1b3d38] uppercase text-[5rem] -mb-[3.5rem]'>community</motion.p>
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: .8, delay: .5 } }}
            className='font-gt text-[#1b3d38] uppercase text-[5rem] -mb-[3.5rem]'>through</motion.p>
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: .8, delay: .6 } }}
            className='font-gt text-[#1b3d38] uppercase text-[5rem] -mb-[3.5rem]'>wholesome</motion.p>
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: .8, delay: .7 } }}
            className='font-gt text-[#1b3d38] uppercase text-[5rem] -mb-[3.5rem]'>balanced</motion.p>
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: .8, delay: .75 } }}
            className='font-gt text-[#1b3d38] uppercase text-[5rem]'>food.</motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1, delay: .6 } }} className="text-lg border border-black p-6 m-4 md:w-[33rem] md:h-[32rem] w-[20rem] text-center font-poppins">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1, delay: .7 } }}>
            
Wholesome, Honest Cooking: Our cuisine is meticulously crafted from scratch, using only real, unprocessed ingredients, for a wholesome dining experience. 
Our diverse menu thoughtfully caters to various dietary preferences, highlighting an array of plant-based components used seemlessly with your usual favorites. 
We wholeheartedly embrace a holistic approach to dining that reflects our deep respect for the environment. At our restaurant, 
our identity is defined by our commitment to offering nourishing, sustainable, and naturally delectable food choices.
          </motion.p>
          <div className="text-center mt-12 text-[2rem] md:text-[4.5rem] text-[#1b3d38]">
            <Button className="uppercase text-center" children="RESERVE" />
          </div>
        </motion.div>
      </div>
    </div >
  );
};

export default TwoColumn;
