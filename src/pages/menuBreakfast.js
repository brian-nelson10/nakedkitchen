import React from "react";
import "./home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Button from "../components/Button/button";
import BreakfastHero from "../components/MenuHero/breakfast";
import LunchDinnerNext from "../components/NextMenu/lunchDinner";
import DrinksNext from "../components/NextMenu/drinks";
import PdfViewerBreakfast from "../components/PDF/breakfast";

const MenuBreakfast = () => {

    return (
        <main className="bg-[#dbe7e8]">
            <div className="h-[100%] w-[100%] overflow-hidden">
                <div className="scroll h-[100%] w-[100%] overflow-hidden ">
                    <section className="z-50">
                        <Navbar />
                    </section>
                    <section className="grid grid-rows-3 w-screen text-center h-[67rem] z-40 pt-[20rem] bg-fixed -space-y-[10rem] grass">
                        <BreakfastHero />
                    </section>
                    <section className="relative h-fit overflow-hidden grass">
                        <div className="mt-[5rem] md:ml-[3rem] md:mx-[38rem] mb-[5rem]">
                            <PdfViewerBreakfast />
                        </div>
                    </section>
                    <section className="grid grid-cols-2 h-[20rem] md:h-auto">
                        <div className="border-r-2 border-[#e3b505]">
                            <LunchDinnerNext />
                        </div>
                        <div className="border-l-2 border-[#e3b505]">
                            <DrinksNext />
                        </div>
                    </section>
                    <section>
                        <Footer />
                    </section>
                </div>
            </div>
        </main>
    )
};

export default MenuBreakfast;
