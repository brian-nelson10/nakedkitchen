// import React from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import arrow from "../../assets/images/arrowGreen.png"
// import white from "../../assets/images/white.png"
// import "./styles.css"
// const Box = () => {
//   const navigate = useNavigate();
//   function handleMenu() {
//     navigate("/popup");
//   };
//   function handleCatering() {
//     navigate("/catering");
//   };
//   function handleContact() {
//     navigate("/contact");
//   };
//   return (
//     <div>
//         <div className='mx-[1rem] mb-[5rem]'>
//         <div>
//         <motion.p 
//           initial={{opacity: 0, x: -200}}
//           whileInView={{opacity: 1, x: 0, transition: {duration: .8, delay: .4}}}
//           className='font-gt text-[#008080] uppercase md:text-[8rem] text-[5rem] drop-shadow-[6px_6px_0px_#e3b505] md:drop-shadow-[4px_4px_0px_#e3b505] stroke -mb-[2rem] md:-mb-[4rem]'>Food in</motion.p>
//           <motion.p 
//           initial={{opacity: 0, x: -200}}
//           whileInView={{opacity: 1, x: 0, transition: {duration: .8, delay: .5}}}
//           className='font-gt uppercase text-[#008080] text-[5rem] md:text-[8rem] drop-shadow-[6px_6px_0px_#e3b505] md:drop-shadow-[4px_4px_0px_#e3b505] stroke'>the Nude.</motion.p>
//         </div>
//         <div className='font-poppins text-[#1b3d38] text-center md:text-[1.4rem]'>
//             <motion.p
//               initial={{opacity: 0}}
//               whileInView={{opacity: 1, transition: {duration: 1, delay: .3}}}
//               className=''>At Naked Kitchen, we do everything possible</motion.p>
//             <motion.p 
//               initial={{opacity: 0}}
//               whileInView={{opacity: 1, transition: {duration: 1, delay: .4}}}
//               className='mb-10'>to offer healthy, balanced, and sustainable food.</motion.p>
//               <motion.p 
//               initial={{opacity: 0}}
//               whileInView={{opacity: 1, transition: {duration: 1, delay: .5}}}
//               className='md:flex md:flex-row'>Our food is naked ,using unprocessed ingredients,</motion.p>
//               <motion.p 
//               initial={{opacity: 0}}
//               whileInView={{opacity: 1, transition: {duration: 1, delay: .6}}}
//               className=''>for a genuine and wholesome dining experience.</motion.p>
//         </div>
//         </div>
//     <div className="w-full max-w-[50rem] mx-auto border-[1px] border-black font-gt">
//       <motion.div 
//         initial={{opacity: 0, y: 200}}
//         whileInView={{opacity: 1, y: 0, transition: {duration: .5, delay: .7}}}
//         viewport={{ once: true }}
//         onClick={handleMenu}
//         className="flip-container border-black border-b-[1px] w-full hover:cursor-pointer">
//         <div className='flip-inner'>
//           <div className='flip-front grid grid-cols-2 mx-4 mt-4 p-'>
//         <div>
//         <h2 className="text-[3.5rem]  md:text-[4.5rem] font-bold">MENU</h2>
//         </div>
        
//         <div className="flex justify-end items-center text-end">
//             <img src={arrow} alt="arrow" className='w-[6rem] justify-end items-center'/>
//         </div>
//         </div>
//         <div className='flip-back bg-black grid grid-cols-2 -mt-20 mx-4'>
//           <div>
//         <h2 className="text-[3.5rem]  md:text-[4.5rem] font-bold">MENU</h2>
//         </div>
        
//         <div className="flex justify-end items-center text-end">
//             <img src={white} alt="arrow" className='w-[6rem] justify-end items-center mr-1 mt-1'/>
//         </div>
//         </div>
//         </div>
//       </motion.div>
//       <motion.div 
//         initial={{opacity: 0, y: 200}}
//         whileInView={{opacity: 1, y: 0, transition: {duration: .5, delay: .8}}}
//         viewport={{ once: true }}
//         className="flip-container border-black border-b-[1px] w-full hover:cursor-pointer"
//         onClick={handleContact}>
//         <div className='flip-inner'>
//           <div className='flip-front grid grid-cols-2 mx-4 mt-4 p-'>
//         <div>
//         <h2 className="text-[3.5rem]  md:text-[4.5rem] font-bold">CONTACT</h2>
        
//         </div>
        
//         <div className="flex justify-end items-center text-end">
//             <img src={arrow} alt="arrow" className='w-[6rem] justify-end items-center -rotate-[45deg]'/>
//         </div>
//         </div>
//         <div className='flip-back bg-black grid grid-cols-2 -mt-20 mx-4'>
//           <div>
//         <h2 className="text-[3.5rem]  md:text-[4.5rem] font-bold">CONTACT</h2>
        
//         </div>
        
//         <div className="flex justify-end items-center text-end">
//             <img src={white} alt="arrow" className='w-[6rem] justify-end items-center mr-1 mt-1 -rotate-[45deg]'/>
//         </div>
//         </div>
//         </div>
//       </motion.div>
//       <motion.div 
//         initial={{opacity: 0, y: 200}}
//         whileInView={{opacity: 1, y: 0, transition: {duration: .5, delay: .9}}}
//         viewport={{ once: true }}
//         className='flip-container border-black border-b-[1px] w-full hover:cursor-pointer'
//         onClick={handleCatering}>
//       <div className='flip-inner'>
//       <div className="flip-front w-full mx-4 mt-4 grid grid-cols-2">
//         <div>
//         <h2 className="text-[3.5rem]  md:text-[4.5rem] font-bold">CATERING</h2>
        
//         </div>
//         <div className='flex justify-end text-end mr-8 items-center'>
//             <img src={arrow} alt="arrow" className="w-[6rem] justify-end items-center -rotate-90"/>
//         </div>
//       </div>
//       <div className='flip-back bg-black grid grid-cols-2 -mt-20 mx-4'>
//           <div>
//         <h2 className="text-[3.5rem]  md:text-[4.5rem]">CATERING</h2>
        
//         </div>
//         <div className="flex justify-end items-center text-end">
//             <img src={white} alt="arrow" className='w-[6rem] justify-end items-center mr-1 mt-1 rotate-90'/>
//         </div>
//         </div>
//       </div>
//       </motion.div>
//     </div>
//     </div>
//   );
// };

// export default Box;

import React from 'react';
import photo000 from "../../assets/images/onigiri.png"
import photo00 from "../../assets/images/chxSliders.png"
import photo0 from "../../assets/images/kimchiPink.png";
import photo1 from '../../assets/images/pastrami.png';
import photo2 from '../../assets/images/chorizo.png';
import photo3 from '../../assets/images/brusselsYellow.png';
import photo4 from '../../assets/images/crispygreen.png';
import photo5 from '../../assets/images/gnocchi.png';
import photo6 from '../../assets/images/ceviche.png';
import photo7 from '../../assets/images/chipped.png';
import photo8 from '../../assets/images/hoisinPnutTaco.png';
import photo9 from '../../assets/images/porkBelly-min.png';
import photo10 from '../../assets/images/riceandBeans.jpeg';
import photo11 from '../../assets/images/onigiri2.png';

// import './Carousel.css'; // Import your custom Tailwind CSS styles

const images = [
  `${photo000}`,
  `${photo00}`,
  `${photo0}`,
  `${photo1}`,
  `${photo2}`,
  `${photo3}`,
  `${photo4}`,
  `${photo5}`,
  `${photo6}`,
  `${photo7}`,
  `${photo8}`,
  `${photo9}`,
  `${photo10}`,
  `${photo11}`
];
const Box = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className="w-full h-auto p-2 m-2 sm:h-auto"
        />
      ))}
    </div>
  );
};

export default Box;
