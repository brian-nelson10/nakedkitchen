import { motion } from 'framer-motion';
import NewButton from "../Button/newbutton";
import { useNavigate } from "react-router-dom";

const DrinksNext = () => {
    const navigate = useNavigate();
    return (
        <>
        <div className="h-full flex flex-col justify-center items-center menu2 md:p-8" >
        <div className="drop-shadow-[3px_3px_0px_#FFB91D] text-[#FD3E31] items-end font-benditos text-[2rem] md:text-[8rem] uppercase">
            <motion.p
                initial={{ y: 310, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, delay: .2 }}
                viewport={{ once: true }}>
                Drinks</motion.p>
        </div>
        <div className="font-benditos text-[#dbe7e8] text-center md:text-[5rem]">
                <motion.p
                    initial={{ y: 320, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: .5, delay: .3 }}
                    viewport={{ once: true }}>
                    <NewButton onClick={() => navigate("/drinks")}>
                            Open Menu
                        </NewButton>
                </motion.p>
            </div>
            </div>
            </>
    )
};

export default DrinksNext;