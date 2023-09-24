import React from "react";
import { motion } from 'framer-motion';
import "./home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
    return (
        <main className="bg-[#dbe7e8]">
            <div className="h-[100%] w-[100%] overflow-hidden">
                <div className="scroll h-[100%] w-[100%] overflow-hidden ">
                    <section className="z-50">
                        <Navbar />
                    </section>
                    <section className="grid grid-rows-3 w-screen h-[68rem] z-40 px-[2rem] pt-[10rem] bg-fixed grass">
                        <div className="grid grid-cols-2 items-end">
                            <div className="text-start text-[#dbe7e8] items-end ml-[1rem] font-gt text-[10rem] -ml-2 uppercase">
                                <motion.p
                                    initial={{ y: -310, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: .5, delay: .8 }}>
                                    About</motion.p>
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
                            
                        </div>
                        <div className="font-gt text-[#dbe7e8] text-center text-[19rem] -mt-20 flex-row flex">
                        <motion.p
                                className="ml-12"
                                initial={{ y: 300, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: .5, delay: .9 }}>
                                KITCHEN
                            </motion.p>
                            </div>
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