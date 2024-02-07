


import React from "react";
import "./home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Button from "../components/Button/button";
import LunchDinnerNext from "../components/NextMenu/lunchDinner";
import BreakfastNext from "../components/NextMenu/breakfast";
import MerchHero from "../components/MenuHero/merch";
import shirt from "../assets/images/linecooktee2.png";
import shirt1 from "../assets/images/linecookteeclouds.jpeg";
import shirt2 from "../assets/images/linecookteeclouds2.jpeg";
import shirt3 from "../assets/images/linecookteeback.jpg";
import clem from "../assets/images/orangeDudeWhite.png";
// import MerchCarousel from "../components/Carousel/merchCarousel";
const Merch = () => {

    return (
        <main className="bg-[#dbe7e8]">
            <div className="h-[100%] w-[100%] overflow-hidden">
                <div className="scroll h-[100%] w-[100%] overflow-hidden ">
                    <section className="z-50">
                        <Navbar />
                    </section>
                    <section className="grid grid-rows-3 w-screen text-center h-[67rem] z-40 px-[2rem] pt-[25rem] bg-fixed -space-y-[10rem] merch">
                        <MerchHero />
                    </section>
                    <section className="relative h-fit overflow-hidden bg-[#020202] merch">
                        <div className="text-[#e3b505] font-poppins text-center mt-[4rem] bg-black mx-[42rem] py-10 rounded bg-opacity-75">
                            <p className="mb-2">Tax & Shipping Included!</p>
                            <p className="mb-2">All proceeds go into opening our restaurant!</p>
                        </div>
                        <div className="grid grid-rows-2 p-[3rem] m-[3rem] justify-center items-center text-center gap-4">
                            <div className="border-3 border border-black p-10 bg-black bg-opacity-95">
                                <div className="mb-2 text-[#47b9c3] font-gt uppercase text-[3rem]">The Line Cook Tee</div>
                                <div className="mb-2 text-white md:mx-10 mx-[3rem] md:px-10 mb-5 font-poppins uppercase md:text-[1.5rem]">Small Left Chest Logo with Large Back Print on Comfort Colors Tee</div>
                                <div className="w-fit md:mx-[32rem] ">
                                    <img className="md:h-[30rem] md:w-[30rem] my-1 border-[.2rem] border border-white" src={shirt} />
                                    <img className="md:h-[30rem] md:w-[30rem] my-1 border-[.2rem] border border-white" src={shirt1} />
                                    <img className="md:h-[30rem] md:w-[30rem] my-1 border-[.2rem] border border-white" src={shirt2} />
                                    <img className="md:h-[30rem] md:w-[30rem] my-1 border-[.2rem] border border-white" src={shirt3} />
                                </div>
                                <div className="mt-[8rem]">
                                <stripe-buy-button
                                    buy-button-id="buy_btn_1O6YVRB3OInBaAUnlO4K7IMt"
                                    publishable-key="pk_live_51NOKTIB3OInBaAUnvrJx5QEK7UKLkB1sRz2R9vixw3X7k0rxLGHmn4XT370M2NOtuQXsikfozTt2GnYteNfUjwbQ00lk56yFck"
                                >
                                </stripe-buy-button>
                                </div>
                            </div>
                            <div className="border-3 border border-black p-10 bg-black bg-opacity-95">
                                <div className="mb-2 text-[#47b9c3] font-gt uppercase text-[3rem]">Clementine Tee</div>
                                <div className="mb-2 text-white md:mx-10 md:px-10 mb-5 font-poppins uppercase md:text-[1.5rem]">Oversized Back Print With left chest logo print on Comfort Colors Tee</div>
                                <div className="w-fit flex flex-col md:flex-row mx-[4rem]">
                                    <img className="md:h-[30rem] md:w-[30rem] my-1 border-[.2rem] border border-[#e3b505] " src={clem} />
                                    <img className="md:h-[30rem] md:w-[30rem] my-1 border-[.2rem] border border-[#e3b505] hidden md:block" src={clem} />
                                    <img className="md:h-[30rem] md:w-[30rem] my-1 border-[.2rem] border border-[#e3b505] hidden md:block" src={clem} />
                                </div>
                                <div className="mt-8">
                                <stripe-buy-button
                                    buy-button-id="buy_btn_1O6ccMB3OInBaAUnRPG3hZ9b"
                                    publishable-key="pk_live_51NOKTIB3OInBaAUnvrJx5QEK7UKLkB1sRz2R9vixw3X7k0rxLGHmn4XT370M2NOtuQXsikfozTt2GnYteNfUjwbQ00lk56yFck"
                                >
                                </stripe-buy-button>
                                </div>
                            </div>
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

export default Merch;




