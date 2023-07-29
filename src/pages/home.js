import React, { useEffect, useRef, useState} from "react";
import { motion } from 'framer-motion';
import IntroAnimation from "../components/IntroAnimation";
import Carousel from "../components/Carousel";
import Hamburger from "../components/Hamburger";
import nklogo from "../assets/images/nkwhite.png"
// import WritingText from "../components/WritingText";
import "./home.css";
import Marquee from "../components/Marquee";
import Box from "../components/About";
import ImageBox from "../components/ImageBox";
import TwoColumn from "../components/TwoColumn";
import BoxTwo from "../components/About/boxTwo";
import MenuImages from "../components/MenuImages";
import Footer from "../components/Footer";
import useWindowSize from "../components/hooks/useWindowSize";

const Home = () => {
    const myRef = useRef(null);
    const [menuState, setMenuState] = useState(false);
    const handleStateChange = () => {
        setMenuState((prevState) => !prevState);
    }
    const [width, setWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
   // Return a function from the effect that removes the event listener
         return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
        useEffect(() => {
            if (menuState) {
                myRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }, [menuState]);
        React.useState(() => {
            typeof windows !== "undefined" && window.scrollTo(0, 0);
        }, []);
  //Hook to grab window size
  const size = useWindowSize();
  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;
    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * .5;
    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;
    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };
    return (
        <main className="bg-white">
             <div ref={app} className="h-[100%] w-[100%] overflow-hidden">
      <div ref={scrollContainer} className="scroll h-[100%] w-[100%] overflow-hidden "> 
            <section ref={myRef} className="grid grid-cols-3 w-screen z-50 fixed px-[2rem]">
                <div className="grid items-center mb-4 z-40">
                    <IntroAnimation />
                </div>

                <div className="grid justify-center text-center h-[12rem] w-[12rem] mx-[12rem]" >

                    <img src={nklogo} alt="nk logo" className="z-50" />
                </div>
                <div className="grid items-center justify-end text-end items-end z-50 mb-4">
                    <Hamburger />
                </div>
            </section>
            <section className="relative h-[342rem] overflow-hidden">
                <hr className="border-black border-b-2 pt-[6.6rem] mx-[2rem]" />
                <motion.section className="w-screen h-screen absolute inset-0"
                    initial={{ y: 0 }}
                    animate={{ y: '10%' }}
                    transition={{ ease: 'linear', duration: .5 }}>
                    <div>
                        <Carousel className="" />
                    </div>
                    <div className="top-0 z-50">
                        <Marquee />
                    </div>
                    <div className="grid grid-cols-11 mt-[15rem] mb-[6rem] card col col-auto splitContent container px-[4rem] flex flex-col">
                        <div className="col-span-5">
                            <Box />
                        </div>
                        <div className="col col-auto mx-[4rem] relative" id="dividerWrap">
                            <div className="contentDivider ">
                                <div className="dividedText "><strong>NAKED</strong></div>
                            </div>
                        </div>
                        <div className="mt-[4rem] col-span-5">
                            <ImageBox />
                        </div>
                    </div>
                    <hr className="border-black border-b-1 mx-[6rem] mb-[8rem]" />

                    {/* <div className="h-[34rem] mx-[5rem] my-[1rem] -pt-[1rem] justify-center text-center flex grass">
               <WritingText/>
               </div> */}
                    <div>
                        <TwoColumn />
                    </div>
                    <hr className="border-black border-b-1 mx-[6rem] mt-[5rem] mb-[8rem]" />
                    <div>
                        <BoxTwo />
                    </div>
                    <div>
                        <MenuImages />
                    </div>
                    <div>
                        <Footer />
                    </div>
                </motion.section>

            </section>
            </div>
            </div>
        </main>
    );
};

export default Home;