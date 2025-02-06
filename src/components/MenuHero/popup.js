import React from "react";
import { motion } from 'framer-motion';
// import Button from "../Button/button";
const PopUpHero = () => {
    return (
        <><div className="text-[#F6B092] items-end font-psych text-[9rem] md:text-[15rem] uppercase -mt-[12rem] md:mt-0">
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .75, delay: .2 }}
                className="drop-shadow-[10px_8px_0px_rgba(0,0,0)]">
                Pop Up!</motion.p>
        </div><div className="font-summer text-[8rem] text-[#e3b505]">
                <motion.p
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 80, opacity: 1 }}
                    transition={{ duration: .75, delay: .5 }}
                    className="drop-shadow-[4px_4px_0px_rgba(0,0,0)]">
                    MENU</motion.p>
            </div>
            {/* <div className="font-gt text-[#dbe7e8] text-center text-[3rem] md:text-[5rem]">
                <motion.p
                    initial={{ y: -320, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: .5, delay: .6 }}>
                    <Button className="" children="CONTACT US" onClick={handleContact}/>
                </motion.p>
            </div> */}
            </>
    )
};

export default PopUpHero;