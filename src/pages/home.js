import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import "./home.css";
import Box from "../components/About";
import ImageBox from "../components/ImageBox";
import BoxTwo from "../components/About/boxTwo";
import MenuImages from "../components/MenuImages";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import hero from "../assets/images/wall5.jpg"
import Marquee1 from "../components/Marquee/marquee1";
import TwoColumn from "../components/TwoColumn";
import Button from "../components/Button/button";

const Home = () => {
    const [scrollY, setScrollY] = useState(0);

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
        <main className="bg-[#dbe7e8]">
            <div
                style={{ transform: `translateY(${scrollAmount}px)` }}
                className="w-full min-h-screen"
            >
                <div className="h-[100%] w-[100%] overflow-hidden">
                    <div className="scroll h-[100%] w-[100%] overflow-hidden ">
                        <section className="z-50">
                            <Navbar />
                        </section>
                        <section className="grid grid-rows-2 w-screen h-[68rem] z-40 px-[2rem] pt-[25rem] bg-fixed grass">
                            <div className="grid grid-cols-2 items-end">
                                <div className="text-start text-[#dbe7e8] items-end ml-[1rem] font-gt text-[3rem] uppercase">
                                    <motion.p
                                        initial={{ y: -310, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: .5, delay: .8 }}>
                                        Eat Balanced. Achieve Wellness. Live Fully.</motion.p>
                                </div>
                                <div></div>
                            </div>
                            <div className="font-gt text-[#dbe7e8] text-center text-[19rem] -mt-20 flex-row flex">
                                <motion.p
                                    initial={{ y: -300, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: .5, delay: .7 }}>
                                    NAKED
                                </motion.p>
                                <motion.p
                                    className="ml-12"
                                    initial={{ y: 300, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: .5, delay: .9 }}>
                                    KITCHEN
                                </motion.p>
                            </div>
                            {/* <div className="grid items-center mb-4 z-40">
                    <IntroAnimation />
                </div>

                <div className="grid justify-center text-center h-[12rem] w-[12rem] mx-[12rem]" >

                    <img src={nklogo} alt="nk logo" className="z-50" />
                </div>
                <div className="grid items-center justify-end text-end items-end z-50 mb-4">
                    <Hamburger />
                </div> */}
                        </section>
                        <section className="relative h-[410rem] overflow-hidden bg-[#dbe7e8]">
                            <motion.section className="w-screen h-screen absolute inset-0"
                                initial={{ y: 0 }}
                                whileInView={{ y: '10%' }}
                                transition={{ ease: 'linear', duration: .5, delay: .1 }}>
                                <div className="grid grid-cols-11 mt-[1rem] mb-[6rem] card col col-auto splitContent container px-[4rem] flex flex-col">
                                    <div className="col-span-5">
                                        <Box />
                                    </div>
                                    <div className="col col-auto mx-[4rem] relative" id="dividerWrap">
                                        <div className="contentDivider ">
                                            <div className="dividedText text-[#1b3d38]"><strong>NAKED</strong></div>
                                        </div>
                                    </div>
                                    <div className="mt-[4rem] col-span-5">
                                        <ImageBox />
                                    </div>
                                </div>
                                <hr className="border-black border-b-1 mx-[6rem] mb-[8rem]" />
                                <div className="-mt-10"><Marquee1 /></div>
                                <div className="grid grid-cols-3 mt-[1rem] mb-[6rem] card col col-auto splitContent container px-[4rem] flex flex-col">
                                    <div className="w-[45rem] h-[57rem] border border-black">
                                        <motion.img
                                            initial={{ opacity: 0, x: -200 }}
                                            whileInView={{ opacity: 1, x: 0, transition: { duration: .8, delay: .2 } }}
                                            src={hero} alt="a cool of food" className="w-[45rem] h-[57rem]" />
                                    </div>
                                    <div className="col col-auto mx-[4rem] relative" id="dividerWrap2">
                                        <div className="contentDivider ">
                                            <div className="dividedText text-[#1b3d38]"><strong>KITCHEN</strong></div>
                                        </div>
                                    </div>
                                    <div className="mt-[3rem] w-full md:w-1/2 -p-1 items-center">
                                        <motion.p
                                            initial={{ opacity: 0, x: 200 }}
                                            whileInView={{ opacity: 1, x: 0, transition: { duration: .8 } }}
                                            className='font-gt text-[#1b3d38] uppercase text-[8rem] -mb-[4rem]'>Cooking</motion.p>
                                        <motion.p
                                            initial={{ opacity: 0, x: 200 }}
                                            whileInView={{ opacity: 1, x: 0, transition: { duration: .8 } }}
                                            className='font-gt text-[#1b3d38] uppercase text-[8rem] -mb-[4rem]'>With</motion.p>
                                        <motion.p
                                            initial={{ opacity: 0, x: 200 }}
                                            whileInView={{ opacity: 1, x: 0, transition: { duration: .8 } }}
                                            className='font-gt uppercase text-[#1b3d38] text-[8rem]'>conscious</motion.p>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1, transition: { duration: 1, delay: .2 } }}
                                            className="text-lg border-2 border-black p-6 m-4 w-[32rem] h-[30rem] font-poppins">
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1, transition: { duration: 1, delay: .4 } }}>
                                                Alongside a warm, inviting and social
                                                atmosphere our guests will enjoy comforting, healthy, and delicious scratch food from a
                                                menu of traditional and new favorites done in a nourishing health-conscious manner. Taking
                                                ingredients from around the world and accessing a “food is medicine” mentality, we
                                                have created a vision to deliver a truly unique experience for our community. “Cooking
                                                with Conscience” is the forefront of our brand’s standard.
                                            </motion.p>
                                            <div className="text-center my-[4rem] text-[4.5rem] text-[#1b3d38]">
                                                <Button className="uppercase text-center" children="LEARN MORE" />
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                                <hr className="border-black border-b-1 mx-[6rem] mb-[8rem]" />

                                <div>
                                    <BoxTwo />
                                </div>
                                <div>
                                    <MenuImages />
                                </div>
                                <hr className="border-black border-b-1 mx-[6rem] mt-[5rem] mb-[8rem]" />
                                <div>
                                    <TwoColumn />
                                </div>
                                <div>
                                    <Footer />
                                </div>
                            </motion.section>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Home;