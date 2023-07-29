import React from 'react';
import { motion } from 'framer-motion';
import arrow from "../../assets/images/arrow.png"
import white from "../../assets/images/white.png"
import "./styles.css"
const Box = () => {
  return (
    <div>
        <div className='mx-[3rem] mb-[5rem]'>
        <div>
        <motion.p 
          initial={{opacity: 0, x: -200}}
          whileInView={{opacity: 1, x: 0, transition: {duration: .8}}}
          className='font-mentra text-[5rem]'>Food in the Nude.</motion.p>
        </div>
        <div className='font-poppins text-[1.2rem]'>
            <motion.p
              initial={{opacity: 0}}
              whileInView={{opacity: 1, transition: {duration: 1, delay: .2}}}
              className=''>Let's change your perspective on how you eat..</motion.p>
            <motion.p 
              initial={{opacity: 0}}
              whileInView={{opacity: 1, transition: {duration: 1, delay: .5}}}
              className=''>Let's strip it down and redifine what a scratch kitchen really means.</motion.p>
        </div>
        </div>
    <div className="w-full max-w-[50rem] mx-auto border-[1px] border-black font-poppins">
      <motion.div 
        initial={{opacity: 0, y: 200}}
        whileInView={{opacity: 1, y: 0, transition: {duration: .5, delay: .1}}}
        viewport={{ once: true }}
        className="border-black border-b-[1px] w-full px-4 py-10">
        <h2 className="text-lg font-bold">Phoenix Arts District.</h2>
        <p></p>
        <p>123 Liberty Street.</p>
      </motion.div>
      <motion.div 
        initial={{opacity: 0, y: 200}}
        whileInView={{opacity: 1, y: 0, transition: {duration: .5, delay: .5}}}
        viewport={{ once: true }}
        className="flip-container border-black border-b-[1px] w-full hover:cursor-pointer">
        <div className='flip-inner'>
          <div className='flip-front grid grid-cols-2 m-4 p-4'>
        <div>
        <h2 className="text-lg font-bold">Pop-Up's</h2>
        <p>Checkout where we are & where we will be.</p>
        </div>
        
        <div className="flex justify-end items-center text-end">
            <img src={arrow} alt="arrow" className='w-[2.9rem] justify-end items-center'/>
        </div>
        </div>
        <div className='flip-back bg-black grid grid-cols-2 -mt-20 p-4 m-4'>
          <div>
        <h2 className="text-lg font-bold">Pop-Up's</h2>
        <p>Checkout where we are & where we will be.</p>
        </div>
        
        <div className="flex justify-end items-center text-end">
            <img src={white} alt="arrow" className='w-[2.9rem] justify-end items-center mr-1 mt-1'/>
        </div>
        </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{opacity: 0, y: 200}}
        whileInView={{opacity: 1, y: 0, transition: {duration: .5, delay: .8}}}
        viewport={{ once: true }}
        className='flip-container border-black border-b-[1px] w-full hover:cursor-pointer'>
      <div className='flip-inner'>
      <div className="w-full m-4 p-4 grid grid-cols-2">
        <div>
        <h2 className="text-lg font-bold">View The Menu.</h2>
        <p>See for yourself.</p>
        </div>
        <div className='flex justify-end text-end mr-8 items-center'>
            <img src={arrow} alt="arrow" className="w-[2.9rem] justify-end items-center -rotate-90"/>
        </div>
      </div>
      <div className='flip-back bg-black grid grid-cols-2 -mt-20 p-4 m-4'>
          <div>
        <h2 className="text-lg font-bold">View The Menu.</h2>
        <p>See for yourself.</p>
        </div>
        <div className="flex justify-end items-center text-end">
            <img src={white} alt="arrow" className='w-[2.9rem] justify-end items-center mr-1 mt-1 rotate-90'/>
        </div>
        </div>
      </div>
      </motion.div>
    </div>
    </div>
  );
};

export default Box;
