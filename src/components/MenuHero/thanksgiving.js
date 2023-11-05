import React from "react";
import { motion } from 'framer-motion';
import Button from "../Button/button";
import { useNavigate } from "react-router-dom";

const ThanksgivingHero = () => {
    const navigate = useNavigate();
    function handleContact() {
        navigate("/contact")
    }
    return (
        <><div className="text-[#dbe7e8] items-end font-gt text-[4rem] md:text-[8rem] uppercase">
            <div>
            <motion.p
                initial={{ y: -310, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: .2 }}
                className="md:-mb-[4rem] md:-mt-[4rem]">
                Vegan</motion.p>
                <motion.p
                initial={{ y: -320, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: .3 }}
                className="md:mt-0">
                Thanksgiving</motion.p>
                </div>
        </div><div className="font-summer text-[8rem] text-[#e3b505]">
                <motion.p
                    initial={{ y: -330, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: .5, delay: .4 }}
                    className="mt-[5rem] tracking-widest">
                    KITS</motion.p>
            </div><div className="font-gt text-[#dbe7e8] text-center text-[3rem] md:text-[5rem]">
                <motion.p
                    initial={{ y: -320, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: .5, delay: .6 }}>
                    <Button className="" children="CONTACT US" onClick={handleContact}/>
                </motion.p>
            </div></>
    )
};

export default ThanksgivingHero;