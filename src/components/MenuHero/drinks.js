import React from "react";
import { motion } from 'framer-motion';
import Button from "../Button/button";
import { useNavigate } from "react-router-dom";

const DrinksHero = () => {
    const navigate = useNavigate();
    function handleContact() {
        navigate("/contact")
    }
    return (
        <><div className="text-[#FD3E31] mt-[3.5rem] md:mt-0 items-end text-[4rem] md:text-[10rem] font-benditos uppercase">
            <motion.p
                initial={{ y: -310, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: .2 }}
                className="drop-shadow-[4px_4px_0px_#FFB91D]">
                Coffee, ECT</motion.p>
        </div><div className="font-summer text-[4rem] md:text-[8rem] text-[#47b9c3] drop-shadow-[4px_4px_0px_rgba(0,0,0)]">
                <motion.p
                    initial={{ y: -320, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: .5, delay: .4 }}>
                    MENU</motion.p>
            </div><div className="font-benditos text-[#dbe7e8] text-center text-[3rem] md:text-[5rem]">
                <motion.p
                    initial={{ y: -320, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: .5, delay: .6 }}>
                    <Button className="" children="CONTACT US" onClick={handleContact}/>
                </motion.p>
            </div></>
    )
};

export default DrinksHero;