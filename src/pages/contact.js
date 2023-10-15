import React from "react";
import "./home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Button from "../components/Button/button";
import ContactHero from "../components/MenuHero/contact";


const Contact = () => {

    return (
        <main className="bg-[#dbe7e8]">
            <div className="h-[100%] w-[100%] overflow-hidden">
                <div className="scroll h-[100%] w-[100%] overflow-hidden ">
                    <section className="z-50">
                        <Navbar />
                    </section>
                    <section className="grid grid-rows-3 w-screen text-center h-[67rem] z-40 px-[2rem] pt-[20rem] bg-fixed -space-y-[10rem] grass">
                        <ContactHero />
                    </section>
                    <section className="relative h-fit overflow-hidden bg-[#020202]">
                        <div className="text-[#47b9c3] font-poppins">
                            Email: brian.nelson@nakedkitchenjax.com
                            Phone: (407) - 864 - 0404
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
