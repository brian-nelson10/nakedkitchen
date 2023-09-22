import React from 'react';
import { motion } from 'framer-motion';
import hero from "../../assets/images/wall5.jpg"
import Button from '../Button/button';

const TwoColumn = () => {
  return (
    <div className="grid grid-cols-2 mx-[1rem] mb-[5rem] justify-items-center">
      <div className="w-[45rem] h-[57rem] border border-black">
        <motion.img
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: .8, delay: .2 } }}
          src={hero} alt="a cool of food" className="w-[45rem] h-[57rem]" />
      </div>
      <div className="w-full md:w-1/2 text-end items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: .8, delay: .1 } }}
            className='font-gt uppercase text-[#1b3d38] text-[5rem] -mb-[3.5rem] '>enhancing</motion.p>
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: .8, delay: .2 } }}
            className='font-gt text-[#1b3d38] uppercase text-[5rem] -mb-[3.5rem]'>the welfare</motion.p>
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
          whileInView={{ opacity: 1, transition: { duration: 1, delay: .6 } }} className="text-lg border border-black p-6 m-4 w-[32rem] h-[20rem] font-poppins">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1, delay: .7 } }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            euismod urna ut sagittis efficitur. Fusce eu mauris eu metus
            sollicitudin luctus nec at massa. Integer vitae velit sit amet mi
            fringilla varius nec in libero. Phasellus in justo eu sem dictum
            rhoncus.
          </motion.p>
          <div className="text-center mt-8 text-[4.5rem] text-[#1b3d38]">
            <Button className="uppercase text-center" children="RESERVE" />
          </div>
        </motion.div>
      </div>
    </div >
  );
};

export default TwoColumn;
