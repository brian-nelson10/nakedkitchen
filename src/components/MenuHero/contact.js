import React from "react";
import { motion } from 'framer-motion';

const ContactHero = () => {
    return (
        <><div className="text-[#00000] items-end font-benditos text-[6rem] md:text-[12rem] uppercase -mt-[8rem] md:mt-0">
            <motion.p
                initial={{ y: -310, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: .2 }}
                className="drop-shadow-[8px_8px_0px_rgba(71,185,195)]">
                Contact Us</motion.p>
        </div>
            </>
    )
};

export default ContactHero;