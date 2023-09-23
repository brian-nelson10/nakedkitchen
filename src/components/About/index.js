import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import arrow from "../../assets/images/arrowGreen.png"
import white from "../../assets/images/white.png"
import "./styles.css"
const Box = () => {
  const navigate = useNavigate();
  function handleMenu() {
    navigate("/menus");
  }
  return (
    <div>
        <div className='mx-[1rem] mb-[5rem]'>
        <div>
        <motion.p 
          initial={{opacity: 0, x: -200}}
          whileInView={{opacity: 1, x: 0, transition: {duration: .8, delay: .4}}}
          className='font-gt text-[#1b3d38] uppercase text-[8rem] -mb-[4rem]'>Food in the</motion.p>
          <motion.p 
          initial={{opacity: 0, x: -200}}
          whileInView={{opacity: 1, x: 0, transition: {duration: .8, delay: .5}}}
          className='font-gt uppercase text-[#1b3d38] text-[8rem]'>Nude.</motion.p>
        </div>
        <div className='font-poppins text-[#1b3d38] text-[1.4rem]'>
            <motion.p
              initial={{opacity: 0}}
              whileInView={{opacity: 1, transition: {duration: 1, delay: .3}}}
              className=''>At Naked Kitchen, we do everything possible</motion.p>
            <motion.p 
              initial={{opacity: 0}}
              whileInView={{opacity: 1, transition: {duration: 1, delay: .4}}}
              className='mb-10'>to offer healthy, balanced, and sustainable food.</motion.p>
              <motion.p 
              initial={{opacity: 0}}
              whileInView={{opacity: 1, transition: {duration: 1, delay: .5}}}
              className='flex flex-row'>Our food is <span className='text-[2.2rem] -mt-3'>&nbsp;naked&nbsp;</span> ,using unprocessed ingredients,</motion.p>
              <motion.p 
              initial={{opacity: 0}}
              whileInView={{opacity: 1, transition: {duration: 1, delay: .6}}}
              className=''>for a genuine and wholesome dining experience.</motion.p>
        </div>
        </div>
    <div className="w-full max-w-[50rem] mx-auto border-[1px] border-black font-gt">
      <motion.div 
        initial={{opacity: 0, y: 200}}
        whileInView={{opacity: 1, y: 0, transition: {duration: .5, delay: .7}}}
        viewport={{ once: true }}
        onClick={handleMenu}
        className="flip-container border-black border-b-[1px] w-full hover:cursor-pointer">
        <div className='flip-inner'>
          <div className='flip-front grid grid-cols-2 mx-4 mt-4 p-'>
        <div>
        <h2 className="text-[4.5rem] font-bold">MENU</h2>
        </div>
        
        <div className="flex justify-end items-center text-end">
            <img src={arrow} alt="arrow" className='w-[6rem] justify-end items-center'/>
        </div>
        </div>
        <div className='flip-back bg-black grid grid-cols-2 -mt-20 mx-4'>
          <div>
        <h2 className="text-[4.5rem] font-bold">MENU</h2>
        </div>
        
        <div className="flex justify-end items-center text-end">
            <img src={white} alt="arrow" className='w-[6rem] justify-end items-center mr-1 mt-1'/>
        </div>
        </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{opacity: 0, y: 200}}
        whileInView={{opacity: 1, y: 0, transition: {duration: .5, delay: .8}}}
        viewport={{ once: true }}
        className="flip-container border-black border-b-[1px] w-full hover:cursor-pointer">
        <div className='flip-inner'>
          <div className='flip-front grid grid-cols-2 mx-4 mt-4 p-'>
        <div>
        <h2 className="text-[4.5rem] font-bold">RESERVE</h2>
        
        </div>
        
        <div className="flex justify-end items-center text-end">
            <img src={arrow} alt="arrow" className='w-[6rem] justify-end items-center -rotate-[45deg]'/>
        </div>
        </div>
        <div className='flip-back bg-black grid grid-cols-2 -mt-20 mx-4'>
          <div>
        <h2 className="text-[4.5rem] font-bold">RESERVE</h2>
        
        </div>
        
        <div className="flex justify-end items-center text-end">
            <img src={white} alt="arrow" className='w-[6rem] justify-end items-center mr-1 mt-1 -rotate-[45deg]'/>
        </div>
        </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{opacity: 0, y: 200}}
        whileInView={{opacity: 1, y: 0, transition: {duration: .5, delay: .9}}}
        viewport={{ once: true }}
        className='flip-container border-black border-b-[1px] w-full hover:cursor-pointer'>
      <div className='flip-inner'>
      <div className="flip-front w-full mx-4 mt-4 grid grid-cols-2">
        <div>
        <h2 className="text-[4.5rem] font-bold">ABOUT US</h2>
        
        </div>
        <div className='flex justify-end text-end mr-8 items-center'>
            <img src={arrow} alt="arrow" className="w-[6rem] justify-end items-center -rotate-90"/>
        </div>
      </div>
      <div className='flip-back bg-black grid grid-cols-2 -mt-20 mx-4'>
          <div>
        <h2 className="text-[4.5rem]">ABOUT US</h2>
        
        </div>
        <div className="flex justify-end items-center text-end">
            <img src={white} alt="arrow" className='w-[6rem] justify-end items-center mr-1 mt-1 rotate-90'/>
        </div>
        </div>
      </div>
      </motion.div>
    </div>
    </div>
  );
};

export default Box;
