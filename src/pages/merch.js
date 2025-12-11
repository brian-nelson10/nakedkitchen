import React from "react";
import "./home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LunchDinnerNext from "../components/NextMenu/lunchDinner";
import BreakfastNext from "../components/NextMenu/breakfast";
import MerchHero from "../components/MenuHero/merch";
import MerchPage from "../components/Submenu/merch";
const Merch = () => {
    return (
        <main className="bg-[#dbe7e8]">
            <div className="h-[100%] w-[100%] overflow-hidden">
                <div className="scroll h-[100%] w-[100%] overflow-hidden">
                    <section className="z-50">
                        <Navbar />
                    </section>
                    <section className="grid grid-rows-3 w-screen text-center h-[67rem] z-40 px-[2rem] pt-[25rem] bg-fixed -space-y-[10rem] merch">
                        <MerchHero />
                    </section>
                    <section className="relative h-fit overflow-hidden bg-[#020202] merch">
                        <div className="text-[#e3b505] font-poppins text-center mt-[4rem] bg-black md:mx-[42rem] py-10 rounded bg-opacity-75">
                            <p className="mb-2">Shipping Included! Tax Included!</p>
                            <p className="mb-2">Recieve a FREE ENTREE gift card for every purchase!</p>
                            <p className="mb-2">(Redeemable at our Restaurant Only.)</p>
                            <p className="mb-2">(Once we open of course.)</p>
                        </div>
                    </section>
                    <section className="">
                            <MerchPage />
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
    );
};
export default Merch;
