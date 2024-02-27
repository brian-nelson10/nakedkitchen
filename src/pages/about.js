import React from "react";
import { motion } from 'framer-motion';
import "./home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutContent from "../components/AboutContent";
import myVideo from "../assets/images/veggieVideo.mov"
import Marquee1 from "../components/Marquee/marquee1";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Button from "../components/Button/button";
import TwoColumn from "../components/TwoColumn";
import LazyLoad from "react-lazy-load";
const About = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Adjust the maxWidth according to your mobile breakpoints
    const navigate = useNavigate();

    function handleAbout() {
        navigate("/menus")
    }
    return (
        <main className="bg-[#dbe7e8]">
            <div className="h-[100%] w-[100%] overflow-hidden">
                <div className="scroll h-[100%] w-[100%] overflow-hidden ">
                    <section className="z-50">
                        <Navbar />
                    </section>
                    <section className="grid grid-rows-3 w-screen h-[68rem] z-40 px-[2rem] pt-[10rem] bg-fixed about">
                        <div className="grid md:grid-cols-2 items-end">
                            <div className="text-start text-[#EA85AF] items-end md:ml-[1rem] font-gt text-[5rem] md:text-[10rem] -ml-2 uppercase drop-shadow-[6px_6px_0px_#e3b505] md:drop-shadow-[4px_4px_0px_#e3b505] stroke">
                                <motion.p
                                    initial={{ y: -310, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: .5, delay: .8 }}>
                                    About</motion.p>
                            </div>
                            <div></div>
                        </div>
                        <div className="font-gt text-[#EA85AF] text-center text-[6rem] md:text-[19rem] -mt-[7rem] md:-mt-20 flex-row flex">
                            <motion.p
                                initial={{ y: -300, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: .5, delay: .7 }}
                                className="drop-shadow-[6px_6px_0px_#e3b505] md:drop-shadow-[4px_4px_0px_#e3b505] stroke">
                                NAKED
                            </motion.p>
                            
                        </div>
                        <div className="font-gt text-[#EA85AF] text-center text-[6.5rem] md:text-[19rem] -mt-[19rem] md:-mt-20 flex-row flex">
                        <motion.p
                                initial={{ y: 300, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: .5, delay: .9 }}
                                className="drop-shadow-[6px_6px_0px_#e3b505] md:drop-shadow-[4px_4px_0px_#e3b505] stroke md:ml-12">
                                KITCHEN
                            </motion.p>
                            </div>
                    </section>
                    <section>
                    <div className=""><Marquee1 /></div>
                        <div className="grid md:grid-cols-3 mt-[1rem] mb-[6rem] card col col-auto splitContent container px-[1rem] md:px-[4rem] flex flex-col">
                            <div className="md:w-[45rem] md:h-[57rem] wborder border-black">
                                <motion.video
                                    viewport={{ once: true }}
                                    autoPlay={!isMobile} // Disable autoPlay for mobile
                                    loop
                                    muted
                                    initial={{ opacity: 0, x: -200 }}
                                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }}
                                    className="md:w-[45rem] md:h-[57rem] w-[22rem] h-[30rem]"
                                >
                                    <source src={myVideo} type="video/mp4" />
                                </motion.video>
                            </div>
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
                                    className='font-gt text-[#EA85AF] uppercase text-[5rem] drop-shadow-[6px_6px_0px_#e3b505] md:drop-shadow-[4px_4px_0px_#e3b505] stroke md:text-[8rem] -mb-[3rem] md:-mb-[4rem]'>Cooking</motion.p>
                                <motion.p
                                    viewport={{ once: true }}
                                    initial={{ opacity: 0, x: 200 }}
                                    whileInView={{ opacity: 1, x: 0, transition: { duration: .8 } }}
                                    className='font-gt text-[#EA85AF] uppercase text-[5rem] drop-shadow-[6px_6px_0px_#e3b505] md:drop-shadow-[4px_4px_0px_#e3b505] stroke md:text-[8rem] -mb-[3rem] md:-mb-[4rem]'>With</motion.p>
                                <motion.p
                                    viewport={{ once: true }}
                                    initial={{ opacity: 0, x: 200 }}
                                    whileInView={{ opacity: 1, x: 0, transition: { duration: .8 } }}
                                    className='font-gt uppercase text-[#EA85AF] text-[5rem] drop-shadow-[6px_6px_0px_#e3b505] md:drop-shadow-[4px_4px_0px_#e3b505] stroke md:text-[8rem]'>conscience</motion.p>
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
                                    <div className="text-center my-[4rem] text-[2rem] md:text-[4.5rem] text-[#EA85AF]">
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