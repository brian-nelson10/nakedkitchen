import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from 'framer-motion';
import "./home.css";
import Box from "../components/About";
// import ImageBox from "../components/ImageBox";
import BoxTwo from "../components/About/boxTwo";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import hero from "../assets/images/wall5.jpg"
// import myVideo from "../assets/images/veggieVideo.mov"
// import Marquee1 from "../components/Marquee/marquee1";
// import TwoColumn from "../components/TwoColumn";
import Button from "../components/Button/button";
import { useNavigate } from "react-router-dom";
// import LazyLoad from "react-lazy-load";
// import HoveringImageButton from "../components/HoveringImageButton";
// import CarouselComponent from "../components/Carousel";
// import { useMediaQuery } from "react-responsive";
import photo1 from "../assets/images/liberty.png";


const images = [
  `${photo1}`,
]

const Home = () => {
  // Image animation
  const imgControls = useAnimation();
  const imgRef = useRef(null);
  const imgInView = useInView(imgRef, { once: true });

  // Paragraph animation
  const textControls = useAnimation();
  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: true });

  useEffect(() => {
    if (imgInView) imgControls.start("visible");
    if (textInView) textControls.start("visible");
  }, [imgInView, textInView, imgControls, textControls]);


  const variants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: .9,
        duration: 1,
        ease: "easeOut",
      },
    },
  };
  useEffect(() => {
    // Load the Instagram embed script
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(script);
  }, []);
  // const isMobile = useMediaQuery({ maxWidth: 767 }); // Adjust the maxWidth according to your mobile breakpoints
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  function handleContact() {
      navigate("/contact")
  }
  const firstLine = "naked";
  const secondLine = "kitchen";
  return (
    <>
    <main className="h-screen">
      <div
        className="w-full min-h-screen"
      >
        <section className="z-50">
          <Navbar />
        </section>
        <section preserveAspectRatio="none" className="grid grid-rows-2 w-screen h-screen md:h-[75rem] md:pb-[15rem] z-40 px-[.5rem] md:px-[1rem] md:pt-[25rem] bg-fixed flex-1 grass">
          <div className="grid md:grid-cols-2  md:-mb-[25rem] md:mb-0 items-end">
            <div className="md:text-start text-[#dbe7e8] items-end ml-[2.8rem] md:ml-[1rem] font-benditos tracking-wide md:tracking-widest mt-[12rem] md:mt-0 text-[1.2rem] md:text-[2.8rem] uppercase">
              <motion.p
                initial={{ y: 338, opacity: 0 }}
                animate={{ y: 338, opacity: 1 }}
                transition={{ duration: .75, delay: .8 }}>
                "Good Food, Makes Good Neighbors"</motion.p>
            </div>
            <div></div>
          </div>
          <div className="font-summer -space-y-[9rem] md:space-y-0 text-center text-[11rem] md:text-[19rem] md:drop-shadow-[10px_5px_0px_#FFB91D] drop-shadow-[2px_2px_0px_#FFB91D] text-[#FD3E31] -mt-[10rem] md:-mt-[7rem] flex-col md:flex-row flex">
          <div>
          {firstLine.split("").map((char, index) => (
            <span
              key={`first-${index}`}
              className="flip-animation"
              style={{ animationDelay: `${index * .3}s` }}
            >
              {char}
            </span>
          ))}
        </div>
        <div>
          {secondLine.split("").map((char, index) => (
            <span
              key={`second-${index}`}
              className="flip-animation"
              style={{ animationDelay: `${(firstLine.length + index) * 0.2}s` }}
            >
              {char}
            </span>
          ))}
        </div>
          </div>
          </section>
          <section className="relative flex flex-col items-center justify-center py-8 px-4 md:px-8 bg-white text-gray-800 grass">    
      <motion.div 
      ref={imgRef}
      initial="hidden"
      animate={imgControls}
      variants={variants}
      className="overflow-hidden mb-8">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className="md:p-3 md:m-3 sm:h-auto"
        />
      ))}
      </motion.div>
      
      <div className="text-center max-w-4xl px-8 my-[6rem]">
        <p className="font-benditos text-[1rem] md:text-[2rem] leading-tight">
        Born from the two beliefs that food is medicine and community is medicine.</p>
        <p className="font-benditos text-[1.5rem] md:text-[2.5rem] leading-tight mt-8">We serve western classics transformed with asian ingredients. Asian American food, reinvented with edge, soul, and streetwise creativity. </p>
         <p className="font-benditos text-[1rem] md:text-[2rem] leading-tight mt-8">At Naked Kitchen, we use food to tell stories, honor local farmers, and create space for people to slow down and engage. It’s not just about what’s on the plate, but who you’re sharing it with and where it came from. 
          <p className="font-benditos text-[1rem] md:text-[2rem] leading-tight mt-8">Naked Kitchen is owned by Alexandra and Brian, along with their three children, Eleanor, Penny, and Clementine, who inspire our commitment to creating a better sutainable future.</p>
        </p>
      </div>
      <div className="text-center max-w-4xl -mt-[2rem]">
        <motion.p
  ref={textRef}
  initial="hidden"
  animate={textControls}
  variants={variants}
  className="font-benditos text-[1.5rem] md:text-[3rem] drop-shadow-[2px_2px_0px_#FFB91D] text-[#FD3E31] leading-tight text-center"
>
  "Good Food, Makes Good Neighbors."
</motion.p>
      </div>
      {/* Read More Button */}
      <div className="text-center my-[4rem] text-[2rem] md:text-[4.5rem] text-[#1D401D]">
                                        <Button className="uppercase text-center" children="CONTACT US" onClick={handleContact} />
                                    </div>
    </section>
        <div className="md:px-[30rem] grass1 shadow-xl max-w-full mx-auto">
          <div className="grass3 py-[5rem]">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/reel/C7UsZEOuAOD/?utm_source=ig_embed&amp;utm_campaign=loading"
              data-instgrm-version="14"
              style={{ background: '#FFF', border: 0, borderRadius: '5px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '840px', minWidth: '326px', padding: 0, width: '99.375%', width: 'calc(100% - 2px)' }}
            >
              <div className="py-[2rem]">
                <a
                  href="https://www.instagram.com/reel/C7UsZEOuAOD/?utm_source=ig_embed&amp;utm_campaign=loading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white text-center no-underline w-full"
                >
                  <div className="flex flex-row items-center">
                    <div className="bg-black-200 rounded-full h-10 w-10 mr-3"></div>
                    <div className="flex flex-col flex-grow justify-center">
                      <div className="bg-gray-200 rounded h-4 mb-1 w-24"></div>
                      <div className="bg-gray-200 rounded h-4 w-16"></div>
                    </div>
                  </div>
                  <div className="py-12"></div>
                  <div className="block h-12 w-12 mx-auto mb-3">
                    <svg width="50px" height="50px" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" fillRule="evenodd">
                        <g transform="translate(-511 -20)" fill="#000">
                          <g>
                            <path d="M556.869 30.41c-2.055 0-3.721 1.666-3.721 3.721 0 2.055 1.666 3.721 3.721 3.721 2.055 0 3.721-1.666 3.721-3.721 0-2.055-1.666-3.721-3.721-3.721M541 60.657c-5.886 0-10.658-4.77-10.658-10.657s4.77-10.658 10.657-10.658c5.886 0 10.657 4.77 10.657 10.657s-4.77 10.658-10.657 10.658M541 33.886c-8.9 0-16.115 7.214-16.115 16.115s7.214 16.115 16.115 16.115c8.899 0 16.114-7.214 16.114-16.115S549.9 33.886 541 33.886M565.378 62.101c-.134 2.921-.622 4.505-1.032 5.562-.543 1.397-1.192 2.394-2.24 3.443-1.048 1.049-2.046 1.697-3.444 2.241-1.055.411-2.641.898-5.56 1.032-3.157.143-4.103.174-12.1.174-7.997 0-8.944-.03-12.102-.174-2.919-.134-4.505-.621-5.56-1.032-1.398-.544-2.396-1.192-3.444-2.24-1.049-1.048-1.697-2.046-2.241-3.444-.41-1.055-.898-2.641-1.032-5.56-.144-3.157-.175-4.104-.175-12.1 0-7.997.03-8.944.174-12.102.134-2.919.622-4.505 1.032-5.56.544-1.398 1.192-2.396 2.24-3.444 1.049-1.049 2.046-1.697 3.444-2.241 1.055-.41 2.641-.898 5.56-1.032 3.157-.144 4.104-.175 12.1-.175 7.997 0 8.944.03 12.102.174 2.919.134 4.505.622 5.56 1.032 1.398.544 2.396 1.192 3.444 2.24 1.048 1.048 1.697 2.046 2.24 3.444.41 1.055.898 2.641 1.032 5.56.144 3.157.175 4.104.175 12.1 0 7.997-.03 8.944-.174 12.102"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="pt-2">
                    <div className="text-blue-500 font-medium text-sm">View this post on Instagram</div>
                  </div>
                  <div className="py-8"></div>
                  <div className="flex flex-row mb-3 items-center">
                    <div>
                      <div className="bg-gray-200 rounded-full h-3 w-3 transform translate-x-0 translate-y-2"></div>
                      <div className="bg-gray-200 h-3 transform -rotate-45 translate-x-1 translate-y-1 w-3 flex-grow-0 mr-3 ml-1"></div>
                      <div className="bg-gray-200 rounded-full h-3 w-3 transform translate-x-2 translate-y-0"></div>
                    </div>
                    <div className="ml-2">
                      <div className="bg-gray-200 rounded-full h-5 w-5"></div>
                      <div className="border-t-2 border-transparent border-l-6 border-gray-200 transform translate-x-4 -translate-y-1 rotate-30"></div>
                    </div>
                    <div className="ml-auto">
                      <div className="border-t-8 border-gray-200 border-r-8 border-transparent transform translate-y-4"></div>
                      <div className="bg-gray-200 h-3 w-4 transform -translate-y-1"></div>
                      <div className="border-t-8 border-gray-200 border-l-8 border-transparent transform -translate-y-1 translate-x-2"></div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow justify-center mb-6">
                    <div className="bg-gray-200 rounded h-4 mb-1 w-56"></div>
                    <div className="bg-gray-200 rounded h-4 w-36"></div>
                  </div>
                </a>
                <p className="text-gray-400 text-sm leading-4 mt-2 overflow-hidden text-center truncate">
                  <a
                    href="https://www.instagram.com/reel/C7UsZEOuAOD/?utm_source=ig_embed&amp;utm_campaign=loading"
                    className="text-gray-400 no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    A post shared by Naked Kitchen (@nakedkitchenjax)
                  </a>
                </p>
              </div>
            </blockquote>
          </div>
        </div>
        <section className="relative h-[440rem] md:h-[480rem] bg-[#dbe7e8] grass">
          <motion.section className="w-screen h-screen absolute inset-0"
            initial={{ y: 20 }}
            whileInView={{ y: '10%' }}
            transition={{ ease: 'linear', duration: .5, delay: .1 }}
          >
            <div className="mb-[6rem] card col col-auto splitContent container px-[1rem] md:px-[4rem] md:flex md:flex-col">
              <div className="">
                <Box />
              </div>
            </div>
            <div>
            </div>
            <hr className="border-black border-b-1 md:mx-[6rem] mx-[1rem] mb-[8rem]" />
            <div className="grass">
                <BoxTwo />
            </div>
            <div className="grass4 h-[24rem] md:h-[80rem]">
            </div>
            <div>
                <Footer />
            </div>
          </motion.section>
        </section>
      </div>


    </main>
    </>
  );
};
export default Home;