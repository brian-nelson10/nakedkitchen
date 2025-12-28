import React from "react";
import { motion } from 'framer-motion';

const MerchHero = () => {
    return (
        <><div className="text-[#FD3E31] items-end font-benditos text-[5rem] md:text-[15rem] uppercase">
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .5, delay: .2 }}
                className="drop-shadow-[4px_4px_0px_#FFB91D]">
                MERCH STORE</motion.p>
        </div>
            </>
    )
};

export default MerchHero;