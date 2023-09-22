import React from 'react';
import logo from "../../assets/images/nkgold.png";
import arrow from "../../assets/images/arrowGreen.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { motion } from "framer-motion";
import white from "../../assets/images/white.png"
import "./styles.css";
const Footer = () => {
  return (
    <footer className="bg-[#1b3d38] py-4 text-[#dbe7e8] bottom-0">
      {/* First Row */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 border-b-2 border-t-2 border-[#dbe7e8] py-[3rem]">
          {/* First Column */}
          <div className="flex flex-col pt-[4rem] border-r-2 border-[#dbe7e8]">
            <div className='justify-items-start'>
            <h3 className="text-[5rem] font-gt uppercase mb-2 tracking-widest">Naked Kitchen</h3>
            {/* <img
              src={logo} 
              alt="Company Logo"
              className="w-20 h-auto mb-2 mt-3"
            /> */}
            <p className="text-sm text-start font-poppins mt-3 pr-5">
              We Serve it Naked. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          euismod urna ut sagittis efficitur. Fusce eu mauris eu metus
          sollicitudin luctus nec at massa. Integer vitae velit sit amet mi
          fringilla varius nec in libero. Phasellus in justo eu sem dictum
          rhoncus.
            </p>
            </div>
            <div className='flex justify-items-center font-poppins mt-5 gap-5 mx-[5rem]'>
            <img
              src={logo} 
              alt="Company Logo"
              className="w-[6rem] h-auto"
            />
            <div className='mt-[1rem]'>
            <p className='font-bold '>Questions? &nbsp;</p>
            <p>info@nakedkitchenjax.com</p>
            </div>
          </div>
          </div>
          

          {/* Second Column */}
          <div className="grid grid-rows-4 px-4 gap-4 border-r-2 border-[#dbe7e8] font-gt uppercase text-[3rem]">
          <motion.div 
        initial={{opacity: 0, y: 200}}
        whileInView={{opacity: 1, y: 0, transition: {duration: .5, delay: .1}}}
        viewport={{ once: true }}
        className="flip-containerFoot border-black border-b-[1px] w-full hover:cursor-pointer">
        <div className='flip-innerFoot'>
          <div className='flip-frontFoot grid grid-cols-2 mx-4 mt-4 p-'>
        <div>
        <h2 className="text-[4.5rem] font-bold text-[#dbe7e8]">MENU</h2>
        </div>
        
        <div className="flex justify-end items-center text-end">
            <img src={white} alt="arrow" className='w-[6rem] justify-end items-center'/>
        </div>
        </div>
        <div className='flip-backFoot bg-black grid grid-cols-2 -mt-20 mx-4'>
          <div>
        <h2 className="text-[4.5rem] font-bold">MENU</h2>
        </div>
        
        <div className="flex justify-end items-center text-end">
            <img src={arrow} alt="arrow" className='w-[6rem] justify-end items-center mr-1 mt-1'/>
        </div>
        </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{opacity: 0, y: 200}}
        whileInView={{opacity: 1, y: 0, transition: {duration: .5, delay: .1}}}
        viewport={{ once: true }}
        className="flip-containerFoot border-black border-b-[1px] w-full hover:cursor-pointer">
        <div className='flip-innerFoot'>
          <div className='flip-frontFoot grid grid-cols-2 mx-4 mt-4 p-'>
        <div>
        <h2 className="text-[4.5rem] font-bold text-[#dbe7e8]">Gallery</h2>
        </div>
        
        <div className="flex justify-end items-center text-end">
            <img src={white} alt="arrow" className='w-[6rem] justify-end items-center'/>
        </div>
        </div>
        <div className='flip-backFoot bg-black grid grid-cols-2 -mt-20 mx-4'>
          <div>
        <h2 className="text-[4.5rem] font-bold">Gallery</h2>
        </div>
        
        <div className="flex justify-end items-center text-end">
            <img src={arrow} alt="arrow" className='w-[6rem] justify-end items-center mr-1 mt-1'/>
        </div>
        </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{opacity: 0, y: 200}}
        whileInView={{opacity: 1, y: 0, transition: {duration: .5, delay: .1}}}
        viewport={{ once: true }}
        className="flip-containerFoot border-black border-b-[1px] w-full hover:cursor-pointer">
        <div className='flip-innerFoot'>
          <div className='flip-frontFoot grid grid-cols-2 mx-4 mt-4 p-'>
        <div>
        <h2 className="text-[4.5rem] font-bold text-[#dbe7e8]">About</h2>
        </div>
        
        <div className="flex justify-end items-center text-end">
            <img src={white} alt="arrow" className='w-[6rem] justify-end items-center'/>
        </div>
        </div>
        <div className='flip-backFoot bg-black grid grid-cols-2 -mt-20 mx-4'>
          <div>
        <h2 className="text-[4.5rem] font-bold">About</h2>
        </div>
        
        <div className="flex justify-end items-center text-end">
            <img src={arrow} alt="arrow" className='w-[6rem] justify-end items-center mr-1 mt-1'/>
        </div>
        </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{opacity: 0, y: 200}}
        whileInView={{opacity: 1, y: 0, transition: {duration: .5, delay: .1}}}
        viewport={{ once: true }}
        className="flip-containerFoot border-black border-b-[1px] w-full hover:cursor-pointer">
        <div className='flip-innerFoot'>
          <div className='flip-frontFoot grid grid-cols-2 mx-4 mt-4 p-'>
        <div>
        <h2 className="text-[4.5rem] font-bold text-[#dbe7e8]">Contact</h2>
        </div>
        
        <div className="flex justify-end items-center text-end">
            <img src={white} alt="arrow" className='w-[6rem] justify-end items-center'/>
        </div>
        </div>
        <div className='flip-backFoot bg-black grid grid-cols-2 -mt-20 mx-4'>
          <div>
        <h2 className="text-[4.5rem] font-bold">Contact</h2>
        </div>
        
        <div className="flex justify-end items-center text-end">
            <img src={arrow} alt="arrow" className='w-[6rem] justify-end items-center mr-1 mt-1'/>
        </div>
        </div>
        </div>
      </motion.div>
            {/* <div className="border-b-2 border-[#dbe7e8] border-t-2 pt-6 pb-2 grid grid-cols-2 gap-[25rem] -space-x-8">
                <div className=''>
              <a href="#">Menu</a>
              </div>
              <div className='h-[3rem] w-[3rem] pt-2'>
                <img src={arrow} alt="arrow" className=''/>
              </div>
            </div>
            <div className="border-b-2 border-[#dbe7e8] pt-6 pb-2 grid grid-cols-2 gap-[25rem] -space-x-8">
                <div className=''>
              <a href="#">Gallery</a>
              </div>
              <div className='h-[2rem] w-[3rem]'>
                <img src={arrow} alt="arrow" className=''/>
              </div>
            </div>
            <div className="border-b-2 border-[#dbe7e8] pt-6 pb-2 grid grid-cols-2 gap-[25rem] -space-x-8">
                <div className='text-start'>
              <a href="#">Jobs</a>
              </div>
              <div className='h-[2rem] w-[3rem]'>
                <img src={arrow} alt="arrow" className=''/>
              </div>
            </div>
            <div className="border-b-2 border-[#dbe7e8] pt-6 pb-2 grid-cols-2 grid gap-[25rem]">
                <div className='text-start'>
              <a href="#">Contact</a>
              </div>
              <div className='h-[2rem] w-[3rem]'>
                <img src={arrow} alt="arrow" className=''/>
              </div>
            </div> */}
          </div>

          {/* Third Column */}
          <div className="grid grid-cols-3 px-6 justify-items-center items-center">
            <div className=''>
              <FaFacebook className='h-[4rem] w-[4rem] hover:text-[#e3b505] hover:cursor-pointer'/>
            </div>
            <div>
              <FaInstagram className='h-[4rem] w-[4rem] hover:text-[#e3b505] hover:cursor-pointer'/>
            </div>
            <div>
              <FaTwitter className='h-[4rem] w-[4rem] hover:text-[#e3b505] hover:cursor-pointer'/>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="container mx-auto px-4 mt-4 grid grid-cols-2">
        <p className="text-sm font-poppins">
          &copy; {new Date().getFullYear()} Naked Kitchen. All rights reserved.
        </p>
        <p className='text-end'>
            Naked Kitchen
        </p>
      </div>
    </footer>
  );
};

export default Footer;
