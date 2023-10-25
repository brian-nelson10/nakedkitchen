import React from "react";
import "./home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Button from "../components/Button/button";
// import LunchDinnerNext from "../components/NextMenu/lunchDinner";
// import BreakfastNext from "../components/NextMenu/breakfast";
import ThanksgivingHero from "../components/MenuHero/thanksgiving";
import ThanksgivingSubmenu from "../components/Submenu/thanksgiving";

const Thanksgiving = () => {

    return (
        <main className="">
                <div className="scroll h-[100%] w-[100%] overflow-hidden ">
                    <section className="z-50">
                        <Navbar />
                    </section>
                    <section className="grid grid-rows-3 w-screen text-center h-[67rem] z-40 px-[2rem] pt-[20rem] bg-fixed -space-y-[10rem] grass">
                        <ThanksgivingHero />
                    </section>
                    <section className="relative h-fit overflow-hidden bg-[#020202]">
                        <div className="-mt-10 mb-[20rem]">
                            <ThanksgivingSubmenu/>
                        </div>
                    </section>
                    {/* <section className="grid grid-cols-2 h-[20rem] md:h-auto">
                        <div className="border-r-2 border-[#e3b505]">
                            <LunchDinnerNext />
                        </div>
                        <div className="border-l-2 border-[#e3b505]">
                            <BreakfastNext />
                        </div>
                    </section> */}
                    <section>
                        <Footer />
                    </section>
                </div>
        </main>
    )
};

export default Thanksgiving;
