import React from "react";
import { motion } from 'framer-motion';
import Button from "../Button/button";
import { useNavigate } from "react-router-dom";

const DrinksNext = () => {
    const navigate = useNavigate();
    function handleDrinks() {
        navigate("/drinks");
    };
    return (
        <>
        <div className="h-full flex flex-col justify-center items-center menu2 p-8" >
        <div className="text-[#dbe7e8] items-end font-gt text-[8rem] uppercase">
            <motion.p
                initial={{ y: 310, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: .2 }}
                viewport={{ once: true }}>
                Drinks</motion.p>
        </div>
        <div className="font-gt text-[#dbe7e8] text-center text-[5rem]">
                <motion.p
                    initial={{ y: 320, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: .5, delay: .3 }}
                    viewport={{ once: true }}>
                    <Button onClick={handleDrinks} className="" children="OPEN MENU" />
                </motion.p>
            </div>
            </div>
            </>
    )
};

export default DrinksNext;