import React from "react";
import { motion } from 'framer-motion';
import Button from "../Button/button";

const DrinksHero = () => {
    return (
        <><div className="text-[#dbe7e8] items-end font-gt text-[8rem] uppercase">
            <motion.p
                initial={{ y: -310, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: .2 }}>
                Drinks</motion.p>
        </div><div className="font-summer text-[8rem] text-[#e3b505]">
                <motion.p
                    initial={{ y: -320, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: .5, delay: .4 }}>
                    MENU</motion.p>
            </div><div className="font-gt text-[#dbe7e8] text-center text-[5rem]">
                <motion.p
                    initial={{ y: -320, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: .5, delay: .6 }}>
                    <Button className="" children="BOOK NOW" />
                </motion.p>
            </div></>
    )
};

export default DrinksHero;