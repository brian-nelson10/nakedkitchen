import React from "react";
import { motion } from 'framer-motion';
import Button from "../Button/button";
import { useNavigate } from "react-router-dom";
const LunchDinnerNext = () => {
    const navigate = useNavigate();
    function handleLunchDinner() {
        navigate("/lunch");
    };
    return (
        <>
        <div className="h-full flex flex-col justify-center items-center menu1 md:p-8" >
        <div className="drop-shadow-[3px_3px_0px_#FFB91D] text-[#FD3E31] items-end font-gt text-[2rem] md:text-[8rem] uppercase">
            <motion.p
                initial={{ y: 310, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: .2 }}
                viewport={{ once: true }}>
                Lunch</motion.p>
        </div>
        <div className="font-gt text-[#dbe7e8] text-center md:text-[5rem]">
                <motion.p
                    initial={{ y: 320, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: .5, delay: .3 }}
                    viewport={{ once: true }}>
                    <Button onClick={handleLunchDinner} className="" children="OPEN MENU" />
                </motion.p>
            </div>
            </div>
            </>
    )
};

export default LunchDinnerNext;