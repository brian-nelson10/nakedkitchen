import React, { useState } from "react";
// import "./hamburger.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navigate = useNavigate();
  // function handleHome() {
  //   navigate('/');
  // };
  function handleContact() {
    navigate('/contact')
  };
  function handleMenu() {
    navigate('/menu')
  };
  function handleMerch() {
    navigate('/merch')
  }
  const child1 = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 2.5,
        duration: 2,
      },
    },
    hidden: {
      opacity: 0,
      x: -60,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 2,
        timing: [2, 1, 1, 1]
      },
    },
  };
  const child2 = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 2.75,
        duration: 2,
      },
    },
    hidden: {
      opacity: 0,
      x: -60,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 2,
        timing: [2, 1, 1, 1]
      },
    },
  };
  const child3 = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 3,
        duration: 2,
      },
    },
    hidden: {
      opacity: 0,
      x: -60,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 2,
        timing: [2, 1, 1, 1]
      },
    },
  };
  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
        type: "spring",
        damping: 12,
        stiffness: 100,

      },
    },
    closed: {
      top: "-190vh",
    },
  };
  const linkVariants = {
    opened: {
      opacity: 1,
      y: 1,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  };
  const lineTop = {
    opened: {
      rotate: 405,
      translateY: 10
    },
    closed: {
      rotate: 0,
      translateY: 0
    },
  }
  const lineMiddle = {
    opened: {
      opacity: 0
    },
    closed: {
      opacity: 1
    },
  }
  const lineBottom = {
    opened: {
      rotate: -405,
      translateY: -8,
      backgroundColor: "white"
    },
    closed: {
      rotate: 0,
      translateY: 0
    },
  }
  // let url = "https://www.nakedkitchenjax.com"
  return (
    <>
      <nav className="mt-6 lg:mt-2 z-50">
        <motion.div
          layout
          className="xl:container-fluid xl:pr-6 hover:cursor-pointer"
          animate={isOpen ? "opened" : "closed"}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.svg
            className="w-14 h-15 sm:w-20 h-20 z-50"
            viewBox="0 0 90 90" id="emoji" xmlns="http://www.w3.org/2000/svg">
            <g id="color" />
            <g id="hair" />
            <g id="skin" />
            <g id="skin-shadow" />
            <motion.g
              animate={isOpen ? "opened" : "closed"}
              initial={false}
              id="line">
              <motion.g
                variants={child3}
                initial="hidden"
                animate="visible">
                <motion.line className="line top" animate={isOpen ? "opened" : "closed"}
                  initial={false} variants={lineTop} transition={{ type: "spring", stiffness: 260, damping: 20 }} x1="16" x2="75" y1="26" y2="26" fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="5" />
              </motion.g>
              <motion.g
                variants={child2}
                initial="hidden"
                animate="visible">
                <motion.line className="line middle" animate={isOpen ? "opened" : "closed"}
                  initial={false} variants={lineMiddle} transition={{ type: "spring", stiffness: 260, damping: 20 }} x1="16" x2="75" y1="36" y2="36" fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4" />
              </motion.g>
              <motion.g
                variants={child1}
                initial="hidden"
                animate="visible">
                <motion.line className="line bottom" animate={isOpen ? "opened" : "closed"}
                  initial={false} variants={lineBottom} transition={{ type: "spring", stiffness: 260, damping: 20 }} x1="16" x2="75" y1="46" y2="46" fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="5" />
              </motion.g>
            </motion.g>
          </motion.svg>
        </motion.div>
      </nav>
      <motion.nav
        className="h-full w-screen fixed flex flex-col items-center justify-center align-center bg-[#faf3dd] z-40 inset-0"
        initial={false}
        variants={menuVariants}
        animate={isOpen ? "opened" : "closed"}
      >
        <div className=" z-50">
         
          {/* Right section */}
          <div className="flex-shrink-0 w-full p-4 -mt-[34rem] xl:mt-0">
            <div className="text-center">
              <ul className="div-list">
                <motion.li
                  onClick={handleMenu}
                  className="list-none tracking-wide hover:cursor-pointer" variants={linkVariants}
                ><Button className="font-mentra pt-8 " children="Menu"/>
                </motion.li>
                {/* <motion.li
                  className="text-[#D8C29D] font-mari xl:mb-2 text-[3.4rem] xl:text-[3rem] list-none tracking-wide hover:cursor-pointer" variants={linkVariants}
                  whileHover={{ scale: 1.1 }}
                  onMouseEnter={() => handleDivHover(1)}
                  onMouseLeave={handleDivLeave}
                  onClick={() => {window.location.href = url;}}
                >Order Online
                </motion.li> */}
                <motion.li
                  className=" list-none tracking-wide hover:cursor-pointer" variants={linkVariants}
                  onClick={handleMerch}
                ><Button className="font-mentra pt-8 " children="Merch"/>
                </motion.li>
                <motion.li
                  className="list-none tracking-wide hover:cursor-pointer" variants={linkVariants}
                  onClick={handleContact}
                ><Button className="font-mentra pt-8 " children="email"/>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </motion.nav>

    </>
  );
};