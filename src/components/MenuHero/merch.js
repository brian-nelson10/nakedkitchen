import React from "react";
import { motion } from 'framer-motion';

const MerchHero = () => {
    return (
        <><div className="text-[#47b9c3] items-end font-sperm text-[5rem] md:text-[8rem] uppercase">
            <motion.p
                initial={{ y: -310, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: .2 }}>
                MERCH STORE</motion.p>
        </div>
            </>
    )
};

export default MerchHero;