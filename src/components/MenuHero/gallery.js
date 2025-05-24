import React from "react";
import { motion } from 'framer-motion';

const GalleryHero = () => {
    return (
        <><div className="text-[#F6B092] items-end font-benditos text-[9rem] md:text-[15rem] uppercase md:-mt-[12rem] mt-[4.5rem]">
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .75, delay: .2 }}
                className="drop-shadow-[10px_8px_0px_rgba(0,0,0)]">
                PHOTO</motion.p>
        </div><div className="font-summer md:text-[8rem] text-[4.5rem] text-[#e3b505]">
                <motion.p
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 80, opacity: 1 }}
                    transition={{ duration: .75, delay: .5 }}
                    className="drop-shadow-[4px_4px_0px_rgba(0,0,0)]">
                    GALLERY</motion.p>
            </div>
            </>
    )
};

export default GalleryHero;