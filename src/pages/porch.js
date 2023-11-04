import React from "react";
import "./home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import BreakfastNext from "../components/NextMenu/breakfast";
// import DrinksNext from "../components/NextMenu/drinks";
import PorchHero from "../components/MenuHero/porch";
import PorchSubmenu from "../components/Submenu/porch";

const MenuPorch = () => {
  
    return (
        <main className="bg-[#dbe7e8]">
            <div className="h-[100%] w-[100%] overflow-hidden">
                <div className="scroll h-[100%] w-[100%] overflow-hidden ">
                    <section className="z-50">
                        <Navbar />
                    </section>
                    <section className="grid grid-rows-3 w-screen text-center h-[67rem] z-40 px-[2rem] pt-[20rem] bg-fixed -space-y-[10rem] grass">
                        <PorchHero />
                    </section>
                    <section className="relative h-fit overflow-hidden bg-[#020202]">
                        <div className="-mt-10 md:mb-[30rem]">
                            <PorchSubmenu />
                        </div>
                    </section>
                    {/* <section className="grid grid-cols-2">
                        <div className="border-r-2 border-[#e3b505]">
                            <BreakfastNext />
                        </div>
                        <div className="border-l-2 border-[#e3b505]">
                            <DrinksNext />
                        </div>
                    </section> */}
                    <section>
                        <Footer />
                    </section>
                </div>
            </div>
        </main>
    )
};

export default MenuPorch;
