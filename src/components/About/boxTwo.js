import React from "react";
import { motion } from "framer-motion";
import arrow from "../../assets/images/arrow.png"
import white from "../../assets/images/white.png"
import "./styles.css"
import Marquee from "../Marquee";

const BoxTwo = () => {
    return (
        <>
        <div className="font-mentra text-[6rem] mx-[16rem] my-[1rem] tracking-wide">
        <Marquee/>
        </div>
        <div className="w-full max-w-[72rem] mx-auto border-[3px] border-black font-gt uppercase">
        <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: .5, delay: .5 } }}
                    viewport={{ once: true }}
                    className="flip-container border-black border-b-[3px] w-full hover:cursor-pointer">
                    <div className='flip-inner'>
                        <div className='flip-front grid grid-cols-2 m-4 p-4'>
                            <div>
                                <h2 className="text-[3.5rem] font-bold ">Breakfast</h2>
                                <p className="text-[3rem]">7am - 4pm</p>
                            </div>

                            <div className="flex justify-end items-center text-end">
                                <img src={arrow} alt="arrow" className='w-[9rem] justify-end items-center' />
                            </div>
                        </div>
                        <div className='flip-back bg-black grid grid-cols-2 -mt-20 p-4 m-4'>
                            <div>
                                <h2 className="text-[3.5rem] font-bold">Breakfast</h2>
                                <p className="text-[3rem]">7am - 4pm</p>
                            </div>

                            <div className="flex justify-end items-center text-end">
                                <img src={white} alt="arrow" className='w-[9rem] justify-end items-center mr-1 mt-1' />
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: .5, delay: .5 } }}
                    viewport={{ once: true }}
                    className="flip-container border-black border-b-[3px] w-full hover:cursor-pointer">
                    <div className='flip-inner'>
                        <div className='flip-front grid grid-cols-2 m-4 p-4'>
                            <div>
                                <h2 className="text-[3.5rem] font-bold">Lunch</h2>
                                <p className="text-[3rem]">11am - Close</p>
                            </div>

                            <div className="flex justify-end items-center text-end">
                                <img src={arrow} alt="arrow" className='w-[9rem] justify-end items-center' />
                            </div>
                        </div>
                        <div className='flip-back bg-black grid grid-cols-2 -mt-20 p-4 m-4'>
                            <div>
                                <h2 className="text-[3.5rem] font-bold">Lunch</h2>
                                <p className="text-[3rem]">11am - Close</p>
                            </div>

                            <div className="flex justify-end items-center text-end">
                                <img src={white} alt="arrow" className='w-[9rem] justify-end items-center mr-1 mt-1' />
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: .5, delay: .5 } }}
                    className="flip-container border-black w-full hover:cursor-pointer">
                    <div className='flip-inner'>
                        <div className='flip-front grid grid-cols-2 m-4 p-4'>
                            <div>
                                <h2 className="text-[3.5rem] font-bold">Dinner</h2>
                                <p className="text-[3rem]">4pm - Close</p>
                            </div>

                            <div className="flex justify-end items-center text-end">
                                <img src={arrow} alt="arrow" className='w-[9rem] justify-end items-center' />
                            </div>
                        </div>
                        <div className='flip-back bg-black grid grid-cols-2 -mt-20 p-4 m-4'>
                            <div>
                                <h2 className="text-[3.5rem] font-bold">Dinner</h2>
                                <p className="text-[3rem]">4pm - Close</p>
                            </div>

                            <div className="flex justify-end items-center text-end">
                                <img src={white} alt="arrow" className='w-[9rem] justify-end items-center mr-1 mt-1' />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div></>
    )
};

export default BoxTwo;