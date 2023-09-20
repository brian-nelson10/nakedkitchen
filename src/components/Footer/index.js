import React from 'react';
import logo from "../../assets/images/nkgold.png";
import arrow from "../../assets/images/arrow.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-[#1b3d38] py-4 text-[#dbe7e8] bottom-0">
      {/* First Row */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 border-b-2 border-t-2 border-[#dbe7e8] py-[3rem]">
          {/* First Column */}
          <div className="flex flex-col pt-[4rem] border-r-2 border-[#dbe7e8]">
            <div className='justify-items-start'>
            <h3 className="text-[3rem] font-gt uppercase mb-2 tracking-widest">Naked Kitchen</h3>
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
          <div className="grid grid-rows-4 px-4 gap-4 border-r-2 border-[#dbe7e8] font-poppins">
            <div className="border-b-2 border-[#dbe7e8] border-t-2 pt-6 pb-2 grid grid-cols-2 gap-[25rem]">
                <div className=''>
              <a href="#">Menu</a>
              </div>
              <div className='h-[2rem] w-[2rem]'>
                <img src={arrow} alt="arrow" className=''/>
              </div>
            </div>
            <div className="border-b-2 border-[#dbe7e8] pt-6 pb-2 grid grid-cols-2 gap-[25rem]">
                <div className=''>
              <a href="#">Gallery</a>
              </div>
              <div className='h-[2rem] w-[2rem]'>
                <img src={arrow} alt="arrow" className=''/>
              </div>
            </div>
            <div className="border-b-2 border-[#dbe7e8] pt-6 pb-2 grid grid-cols-2 gap-[25rem]">
                <div className='text-start'>
              <a href="#">Jobs</a>
              </div>
              <div className='h-[2rem] w-[2rem]'>
                <img src={arrow} alt="arrow" className=''/>
              </div>
            </div>
            <div className="border-b-2 border-[#dbe7e8] pt-6 pb-2 grid-cols-2 grid gap-[25rem]">
                <div className='text-start'>
              <a href="#">Contact</a>
              </div>
              <div className='h-[2rem] w-[2rem]'>
                <img src={arrow} alt="arrow" className=''/>
              </div>
            </div>
          </div>

          {/* Third Column */}
          <div className="grid grid-cols-3 px-6 justify-items-center items-center">
            <div className=''>
              <FaFacebook className='h-[4rem] w-[4rem]'/>
            </div>
            <div>
              <FaInstagram className='h-[4rem] w-[4rem]'/>
            </div>
            <div>
              <FaTwitter className='h-[4rem] w-[4rem]'/>
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
