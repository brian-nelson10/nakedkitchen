import React from "react";
import { motion } from 'framer-motion';
import Button from "../Button/button";
import { useNavigate } from "react-router-dom";

const CateringHero = () => {
    const navigate = useNavigate();
    function handleContact() {
        navigate("/contact")
    }
    return (
        <><div className="text-[#dbe7e8] mt-[3.5rem] md:mt-0 items-end font-benditos text-[5.8rem] md:text-[10rem] uppercase">
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .5, delay: .2 }}
                className="drop-shadow-[10px_8px_0px_rgba(0,0,0)]">
                Catering</motion.p>
        </div><div className="font-summer text-[8rem] text-[#47b9c3]">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .5, delay: .4 }}
                    className="drop-shadow-[4px_4px_0px_rgba(0,0,0)]">
                    MENU</motion.p>
            </div><div className="font-benditos text-[#dbe7e8] text-center text-[3rem] md:text-[5rem]">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .5, delay: .6 }}>
                    <Button className="" children="CONTACT US" onClick={handleContact}/>
                </motion.p>
            </div></>
    )
};

export default CateringHero;