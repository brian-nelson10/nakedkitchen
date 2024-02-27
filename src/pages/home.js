import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
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
// import Button from "../components/Button/button";
// import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazy-load";
// import CarouselComponent from "../components/Carousel";
// import { useMediaQuery } from "react-responsive";

const Home = () => {
    // const isMobile = useMediaQuery({ maxWidth: 767 }); // Adjust the maxWidth according to your mobile breakpoints
    const [scrollY, setScrollY] = useState(0);
    // const navigate = useNavigate();

    // function handleAbout() {
    //     navigate("/about")
    // }

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        const scrollListener = () => {
            handleScroll();
        };

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    }, []);

    const scrollAmount = scrollY * .01; // Adjust the multiplier to control scroll speed

    return (
        <main className=" h-screen">
            <div
                style={{ transform: `translateY(${scrollAmount}px)` }}
                className="w-full min-h-screen"
            >
                <section className="z-50">
                    <Navbar />
                </section>
                <section preserveAspectRatio="none" className="grid grid-rows-2 w-screen h-[75rem] z-40 px-[.5rem] md:px-[1rem] md:pt-[25rem] bg-fixed flex-1 grass">
                    <div className="grid md:grid-cols-2 md:-mb-[25rem] md:mb-0 items-end">
                        <div className="md:text-start text-[#dbe7e8] items-end md:ml-[1rem] font-gt text-[1.2rem] md:text-[2.8rem] uppercase">
                            <motion.p
                                initial={{ y: -310, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: .5, delay: .8 }}>
                                Eat Balanced. Achieve Wellness. Live Fully.</motion.p>
                        </div>
                        <div></div>
                    </div>
                    <div className="font-ent text-[#36F0F0] text-center text-[8rem] md:text-[19rem] drop-shadow-[10px_5px_0px_#FDF331] -mt-[15rem] md:-mt-[7rem] flex-col md:flex-row flex">
                        <motion.p
                            initial={{ y: -300, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: .7 }}>
                            NAKED
                        </motion.p>
                        <motion.p
                            className="md:ml-12 md:mt-0 -mt-[4rem] -ml-2"
                            initial={{ y: 300, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: .9 }}>
                            KITCHEN
                        </motion.p>
                    </div>
                </section>
                <section className="relative h-[428rem] md:h-[420rem] bg-[#dbe7e8]">
                    <motion.section className="w-screen h-screen absolute inset-0"
                        initial={{ y: 0 }}
                        whileInView={{ y: '10%' }}
                        transition={{ ease: 'linear', duration: .5, delay: .1 }}
                        >
                        <div className="mt-[1rem] mb-[6rem] card col col-auto splitContent container px-[1rem] md:px-[4rem] md:flex md:flex-col">
                            <div className="">
                                <LazyLoad>
                                    <Box />
                                </LazyLoad>
                            </div>
                            {/* <div className="col col-auto md:mx-[4rem] relative" id="dividerWrap">
                                <div className="contentDivider ">
                                    <div className="dividedText text-[#1b3d38]"><strong>NAKED</strong></div>
                                </div>
                            </div>
                            <div className="mt-[4rem] md:col-span-6">
                                <LazyLoad>
                                    <ImageBox />
                                </LazyLoad>
                            </div> */}
                        </div>
                        <div>
                        </div>
                        <hr className="border-black border-b-1 md:mx-[6rem] mx-[1rem] mb-[8rem]" />
                        {/* <div className="-mt-10"><Marquee1 /></div>
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
                                    className='font-gt text-[#008080] uppercase text-[5rem] drop-shadow-[6px_6px_0px_#e3b505] md:drop-shadow-[4px_4px_0px_#e3b505] stroke md:text-[8rem] -mb-[3rem] md:-mb-[4rem]'>Cooking</motion.p>
                                <motion.p
                                    viewport={{ once: true }}
                                    initial={{ opacity: 0, x: 200 }}
                                    whileInView={{ opacity: 1, x: 0, transition: { duration: .8 } }}
                                    className='font-gt text-[#008080] uppercase text-[5rem] drop-shadow-[6px_6px_0px_#e3b505] md:drop-shadow-[4px_4px_0px_#e3b505] stroke md:text-[8rem] -mb-[3rem] md:-mb-[4rem]'>With</motion.p>
                                <motion.p
                                    viewport={{ once: true }}
                                    initial={{ opacity: 0, x: 200 }}
                                    whileInView={{ opacity: 1, x: 0, transition: { duration: .8 } }}
                                    className='font-gt uppercase text-[#008080] text-[5rem] drop-shadow-[6px_6px_0px_#e3b505] md:drop-shadow-[4px_4px_0px_#e3b505] stroke md:text-[8rem]'>conscience</motion.p>
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
                                    <div className="text-center my-[4rem] text-[2rem] md:text-[4.5rem] text-[#1b3d38]">
                                        <Button className="uppercase text-center" children="LEARN MORE" onClick={handleAbout} />
                                    </div>
                                </motion.div>
                            </div>
                        </div> */}
                        {/* <hr className="border-black border-b-1 md:mx-[6rem] mx-[1rem] mt-[8rem] md:mt-[8rem] mb-[8rem]" /> */}

                        <div className="mb-10">
                            <LazyLoad>
                                <BoxTwo />
                            </LazyLoad>
                        </div>
                       
                        <div>
                            <LazyLoad>
                                <Footer />
                            </LazyLoad>
                        </div>
                    </motion.section>
                </section>
            </div>


        </main>
    );
};
export default Home;