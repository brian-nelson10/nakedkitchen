import React, {useEffect} from "react";
import { motion } from 'framer-motion';
import "./home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutContent from "../components/AboutContent";
import Marquee1 from "../components/Marquee/marquee1";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Button from "../components/Button/button";
import TwoColumn from "../components/TwoColumn";
import LazyLoad from "react-lazy-load";
const About = () => {
    useEffect(() => {
        // Load Instagram embed script
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
    
        // Clean up script
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Adjust the maxWidth according to your mobile breakpoints
    const navigate = useNavigate();

    function handleAbout() {
        navigate("/popup")
    }
    const firstLine = "naked";
    const secondLine = "kitchen";
  
    return (
        <main className="bg-[#dbe7e8]">
            <div className="h-[100%] w-[100%] overflow-hidden">
                <div className="scroll h-[100%] w-[100%] overflow-hidden ">
                    <section className="z-50">
                        <Navbar />
                    </section>
                   <section preserveAspectRatio="none" className="grid grid-rows-2 w-screen h-[75rem] z-40 px-[.5rem] md:px-[1rem] md:pt-[25rem] bg-fixed flex-1 about">
          <div className="grid md:grid-cols-2 md:-mb-[25rem] md:mb-0 items-end">
            <div className="md:text-start text-[#F6B092] drop-shadow-[2px_2px_0px_#1D401D] md:drop-shadow-[10px_5px_0px_#1D401D] items-end ml-[8rem] md:ml-[1rem] mt-[13rem] md:mt-[1rem] font-benditos text-[3.2rem] md:text-[5.8rem] uppercase">
              <motion.p
                initial={{ y: -810, opacity: 0 }}
                animate={{ y: 10, opacity: 1 }}
                transition={{ duration: .75, delay: .8 }}>
                About</motion.p>
            </div>
            <div></div>
          </div>
          <div className="font-lum text-[#F6B092] text-center text-[8rem] md:text-[19rem] drop-shadow-[10px_5px_0px_#1D401D] -mt-[15rem] md:-mt-[17rem] flex-col md:flex-row flex">
          <div>
          {firstLine.split("").map((char, index) => (
            <span
              key={`first-${index}`}
              className="flip-animation"
              style={{ animationDelay: `${index * 0.1}s` }}
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
              style={{ animationDelay: `${(firstLine.lenbenditosh + index) * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </div>
          </div>
        </section>
                    <section>
                    <div className=""><Marquee1 /></div>
                        <div className="grid md:grid-cols-3 mt-[1rem] mb-[6rem] card col col-auto splitContent container px-[1rem] md:px-[4rem] flex flex-col">
                            {/* <div className="md:w-[45rem] md:h-[57rem] border border-black"> */}
                                {/* <motion.video
                                    viewport={{ once: true }}
                                    autoPlay={!isMobile} // Disable autoPlay for mobile
                                    loop
                                    muted
                                    initial={{ opacity: 0, x: -200 }}
                                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }}
                                    className="md:w-[45rem] md:h-[57rem] w-[22rem] h-[30rem]"
                                >
                                    <source src={myVideo} type="video/mp4" />
                                </motion.video> */}
                            {/* </div> */}
                            <blockquote
        className="instagram-media"
        data-instgrm-permalink=" https://www.instagram.com/reel/C3uCklwu42c/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version="14"
        style={{ background: '#FFF', border: 0, borderRadius: '5px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '840px', minWidth: '326px', padding: 0, width: '99.375%', width: 'calc(100% - 2px)' }}
      >
        <div className="py-[2rem]">
          <a
            href=" https://www.instagram.com/reel/C3uCklwu42c/?utm_source=ig_embed&amp;utm_campaign=loading"
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
              href="https://www.instagram.com/reel/C3uCklwu42c/?utm_source=ig_embed&amp;utm_campaign=loading"
              className="text-gray-400 no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              A post shared by Naked Kitchen (@nakedkitchenjax)
            </a>
          </p>
        </div>
      </blockquote>
                           
                            <div className="col col-auto md:mx-[4rem] relative" id="dividerWrap2">
                                <div className="contentDivider">
                                    <div className="dividedText text-[#1b3d38]"><strong>NAKED KITCHEN</strong></div>
                                </div>
                            </div>
                            <div className="mt-[3rem] w-full md:w-1/2 -p-1 items-center">
                                <motion.p
                                    viewport={{ once: true }}
                                    initial={{ opacity: 0, x: 200 }}
                                    whileInView={{ opacity: 1, x: 0, transition: { duration: .8 } }}
                                    className='font-benditos text-[#F6B092] uppercase text-[5rem] drop-shadow-[6px_6px_0px_#e3b505] md:drop-shadow-[4px_4px_0px_#e3b505] stroke md:text-[8rem] -mb-[3rem] md:-mb-[4rem]'>Cooking</motion.p>
                                <motion.p
                                    viewport={{ once: true }}
                                    initial={{ opacity: 0, x: 200 }}
                                    whileInView={{ opacity: 1, x: 0, transition: { duration: .8 } }}
                                    className='font-benditos text-[#F6B092] uppercase text-[5rem] drop-shadow-[6px_6px_0px_#e3b505] md:drop-shadow-[4px_4px_0px_#e3b505] stroke md:text-[8rem] -mb-[3rem] md:-mb-[4rem]'>With</motion.p>
                                <motion.p
                                    viewport={{ once: true }}
                                    initial={{ opacity: 0, x: 200 }}
                                    whileInView={{ opacity: 1, x: 0, transition: { duration: .8 } }}
                                    className='font-benditos uppercase text-[#F6B092] text-[5rem] drop-shadow-[6px_6px_0px_#e3b505] md:drop-shadow-[4px_4px_0px_#e3b505] stroke md:text-[8rem]'>conscience</motion.p>
                                <motion.div
                                    viewport={{ once: true }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1, transition: { duration: 1, delay: .2 } }}
                                    className="text-lg border-2 border-black p-6 m-4 md:w-[32rem] h-[30rem] font-poppins">
                                    <motion.p
                                        viewport={{ once: true }}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1, transition: { duration: 1, delay: .4 } }}>
                                        Alongside a warm, inviting and social
                                        atmosphere our guests will enjoy comforting, healthy, and delicious scratch food from a
                                        menu of traditional and new favorites done in a nourishing health-conscience manner. Taking
                                        ingredients from around the world and accessing a “food is medicine” mentality, we
                                        have created a vision to deliver a truly unique experience for our community. “Cooking
                                        with Conscience” is the forefront of our brand’s standard.
                                    </motion.p>
                                    <div className="text-center my-[4rem] text-[2rem] md:text-[4.5rem] text-[#F6B092]">
                                        <Button className="uppercase text-center" children="SEE MENU" onClick={handleAbout} />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <AboutContent />
                    </section>
                    <hr className="border-black border-b-1 md:mx-[6rem] mt-[5rem] mb-[8rem]" />
                        <div>
                            <LazyLoad>
                                <TwoColumn />
                            </LazyLoad>
                        </div>
                    <section>
                        <Footer />
                    </section>
                </div>
            </div>
        </main>
    )
};
export default About;