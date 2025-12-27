import React from "react";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
// import Button from "../Button/button";
import NewButton from "../Button/newbutton";
const PopUpHero = () => {
    const navigate = useNavigate();
    return (
        <><div className="text-[#FD3E31] mt-[2rem] md:mt-0 font-benditos text-[5.5rem] md:text-[10rem] uppercase">
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .75, delay: .2 }}
                className="drop-shadow-[4px_4px_0px_#FFB91D]">
                TAKE OUT!</motion.p>
        </div><div className="font-summer text-[4rem] md:text-[8rem] text-[#47b9c3]">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .75, delay: .5 }}
                    className="drop-shadow-[4px_4px_0px_rgba(0,0,0)]">
                    MENU</motion.p>
            </div>
            <div className="m-8">
                <NewButton onClick={() => navigate("/order")}>
                    Order Now
                </NewButton>
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