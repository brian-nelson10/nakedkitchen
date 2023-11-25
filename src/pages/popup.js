import React from "react";
import "./home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Button from "../components/Button/button";
import CateringSubmenu from "../components/Submenu/catering";
import CateringImages from "../components/MenuImages/cateringImages";
import CateringNext from "../components/NextMenu/catering";
import PopUpHero from "../components/MenuHero/popup";
import PopUpSubmenu from "../components/Submenu/popup";

const PopUp = () => {

    return (
        <main className="">
                <div className="scroll h-[100%] w-[100%] overflow-hidden">
                    <section className="z-50">
                        <Navbar />
                    </section>
                    <section className="grid grid-rows-3 w-screen text-center h-[67rem] z-40 px-[2rem] pt-[20rem] -space-y-[10rem] popup">
                        <PopUpHero />
                    </section>
                    <section className="relative h-fit overflow-hidden bg-transparent popup">
                        <div className="-mt-10 mb-[20rem]">
                            <PopUpSubmenu />
                        </div>
                    
                    {/* <div className="-mt-[10rem] mb-10">
                        <CateringImages/>
                    </div> */}
                    </section>
                    <section className="grid h-[20rem] md:h-auto">
                        <div className="border-r-2 border-[#e3b505]">
                            <CateringNext />
                        </div>
                       
                    </section>
                    <section>
                        <Footer />
                    </section>
                </div>
        </main>
    )
};

export default PopUp;
