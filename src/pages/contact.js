import React from "react";
import "./home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Button from "../components/Button/button";
import LunchDinnerNext from "../components/NextMenu/lunchDinner";
import BreakfastNext from "../components/NextMenu/breakfast";
import ContactHero from "../components/MenuHero/contact";
const Contact = () => {
    return (
        <main className="bg-[#dbe7e8]">
            <div className="h-[100%] w-[100%] overflow-hidden">
                <div className="scroll h-[100%] w-[100%] overflow-hidden ">
                    <section className="z-50">
                        <Navbar />
                    </section>
                    <section className="grid grid-rows-3 w-screen text-center h-[67rem] z-40 px-[2rem] pt-[25rem] bg-fixed -space-y-[10rem] contact">
                        <ContactHero />
                    </section>
                    <section className="relative h-fit overflow-hidden contact">
                        <div className="text-[#47b9c3] text-center space-y-8 font-poppins text-[1.2rem] md:text-[5rem] md:p-[5rem] md:mx-[5rem] p-8 mb-[5rem] flex flex-col bg-[#020202] rounded-xl bg-opacity-80">
                           <div><a href="mailto:brian.nelson@nakedkitchenjax.com">Email: brian.nelson@nakedkitchenjax.com</a></div>
                            <div>Phone: (407) - 864 - 0404</div>
                        </div>
                    </section>
                    <section className="grid grid-cols-2 h-[20rem] md:h-auto">
                        <div className="border-r-2 border-[#e3b505]">
                            <LunchDinnerNext />
                        </div>
                        <div className="border-l-2 border-[#e3b505]">
                            <BreakfastNext />
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

export default Contact;
