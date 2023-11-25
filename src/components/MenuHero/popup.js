import React from "react";
import { motion } from 'framer-motion';
// import Button from "../Button/button";
const PopUpHero = () => {
    return (
        <><div className="text-[#47b9c3] items-end font-fifth text-[9rem] md:text-[15rem] uppercase tracking-tighter">
            <motion.p
                initial={{ y: -310, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: .2 }}
                className="">
                Pop Up!</motion.p>
        </div><div className="font-summer text-[8rem] text-[#e3b505]">
                <motion.p
                    initial={{ y: -320, opacity: 0 }}
                    animate={{ y: 80, opacity: 1 }}
                    transition={{ duration: .5, delay: .4 }}>
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