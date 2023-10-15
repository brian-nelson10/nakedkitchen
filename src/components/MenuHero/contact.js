import React from "react";
import { motion } from 'framer-motion';

const ContactHero = () => {
    return (
        <><div className="text-[#dbe7e8] items-end font-gt text-[8rem] uppercase">
            <motion.p
                initial={{ y: -310, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: .2 }}>
                Contact Information</motion.p>
        </div>
            </>
    )
};

export default ContactHero;