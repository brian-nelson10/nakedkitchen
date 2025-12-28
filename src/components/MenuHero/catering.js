import { motion } from 'framer-motion';
import NewButton from "../Button/newbutton";
import { useNavigate } from "react-router-dom";

const CateringHero = () => {
    const navigate = useNavigate();
    return (
        <><div className="text-[#FD3E31] -mt-[2rem] md:mt-0 items-end font-benditos text-[5.8rem] md:text-[10rem] uppercase">
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .5, delay: .2 }}
                className="drop-shadow-[4px_4px_0px_#FFB91D]">
                Catering</motion.p>
        </div>
        {/* <div className="font-summer text-[8rem] text-[#47b9c3]">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .5, delay: .4 }}
                    className="drop-shadow-[4px_4px_0px_rgba(0,0,0)]">
                    information</motion.p>
            </div> */}
            <div className="font-benditos text-[#dbe7e8] text-center text-[3rem] md:text-[5rem]">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .5, delay: .6 }}>
                    <NewButton onClick={() => navigate("/cateringform")}>
                        Request Catering
                    </NewButton>
                </motion.p>
            </div></>
    )
};

export default CateringHero;