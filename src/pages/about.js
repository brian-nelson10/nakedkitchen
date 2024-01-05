import React from "react";
import { motion } from 'framer-motion';
import "./home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutContent from "../components/AboutContent";

const About = () => {
    return (
        <main className="bg-[#dbe7e8]">
            <div className="h-[100%] w-[100%] overflow-hidden">
                <div className="scroll h-[100%] w-[100%] overflow-hidden ">
                    <section className="z-50">
                        <Navbar />
                    </section>
                    <section className="grid grid-rows-3 w-screen h-[68rem] z-40 px-[2rem] pt-[10rem] bg-fixed about">
                        <div className="grid md:grid-cols-2 items-end">
                            <div className="text-start text-[#008080] items-end md:ml-[1rem] font-gt text-[5rem] md:text-[10rem] -ml-2 uppercase drop-shadow-[6px_6px_0px_#e3b505] md:drop-shadow-[4px_4px_0px_#e3b505] stroke">
                                <motion.p
                                    initial={{ y: -310, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: .5, delay: .8 }}>
                                    About</motion.p>
                            </div>
                            <div></div>
                        </div>
                        <div className="font-gt text-[#008080] text-center text-[6rem] md:text-[19rem] -mt-[7rem] md:-mt-20 flex-row flex">
                            <motion.p
                                initial={{ y: -300, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: .5, delay: .7 }}
                                className="drop-shadow-[6px_6px_0px_#e3b505] md:drop-shadow-[4px_4px_0px_#e3b505] stroke">
                                NAKED
                            </motion.p>
                            
                        </div>
                        <div className="font-gt text-[#008080] text-center text-[6.5rem] md:text-[19rem] -mt-[19rem] md:-mt-20 flex-row flex">
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
                        <AboutContent />
                    </section>
                    <section>
                        <Footer />
                    </section>
                </div>
            </div>
        </main>
    )
};
export default About;