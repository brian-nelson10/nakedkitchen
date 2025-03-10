import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Button from "../components/Button/button";
import LunchDinnerNext from "../components/NextMenu/lunchDinner";
import BreakfastNext from "../components/NextMenu/breakfast";
import MerchHero from "../components/MenuHero/merch";
import shirt from "../assets/images/lineCookBlack.jpg";
import shirt1 from "../assets/images/linecookteeback.jpg";
import shirt2 from "../assets/images/lineCookBlack.jpg";
import clem2 from "../assets/images/clemFront.jpg";
import clem from "../assets/images/clemBack.jpg";
import mustardback from "../assets/images/mustardback.jpg";
import mustardfront from "../assets/images/mustardfront.jpg";
import kim from "../assets/images/kim.png";
import kim2 from "../assets/images/kim2.png";

// import MerchCarousel from "../components/Carousel/merchCarousel";
const Merch = () => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const onOpenModal = (image) => {
        setSelectedImage(image);
        setOpen(true);
    };

    const onCloseModal = () => {
        setOpen(false);
    };

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
                            <p className="mb-2">Shipping Included!</p>
                            <p className="mb-2">Recieve a 20$ gift card for every purchase!</p>
                            <p className="mb-2">(Redeemable at our Restaurant Only.)</p>
                            <p className="mb-2">(Once we open of course.)</p>
                        </div>
                        <div className="grid grid-rows-2 p-[3rem] m-[3rem] justify-center items-center text-center gap-4">
                        <div className="border-3 border border-black p-10 bg-black bg-opacity-95">
                            <div className="mb-2 text-[#47b9c3] font-gt uppercase text-[3rem]">The Kimchi Tee</div>
                            <div className="mb-2 text-white md:mx-10 md:px-10 mb-5 font-poppins uppercase md:text-[1.5rem]">Oversized Back Print With left chest logo print on Comfort Colors Tee</div>
                            <div className="w-fit flex flex-col md:flex-row mx-[4rem]">
                                <img className="md:h-[30rem] md:w-[30rem] my-1 border-[.2rem] border border-[#e3b505] cursor-pointer" src={kim} onClick={() => onOpenModal(kim)} />
                                <img className="md:h-[30rem] md:w-[30rem] my-1 border-[.2rem] border border-[#e3b505] cursor-pointer" src={kim2} onClick={() => onOpenModal(kim2)} />
                                <img className="md:h-[30rem] md:w-[30rem] my-1 border-[.2rem] border border-[#e3b505] cursor-pointer" src={kim} onClick={() => onOpenModal(kim)} />
                            </div>
                            <div className="my-[2rem]">
                                <div className="text-[#47b9c3] font-gt uppercase text-[4rem]">
                                    <p className="my-2">25$</p>
                                </div>
                                <stripe-buy-button
                                    buy-button-id="buy_btn_1Q76ydB3OInBaAUnmYU8xjBh"
                                    publishable-key="pk_live_51NOKTIB3OInBaAUnvrJx5QEK7UKLkB1sRz2R9vixw3X7k0rxLGHmn4XT370M2NOtuQXsikfozTt2GnYteNfUjwbQ00lk56yFck"
                                >
                                </stripe-buy-button>
                            </div>
                        </div>
                            <div className="border-3 border border-black p-10 bg-black bg-opacity-95">
                                <div className="mb-2 text-[#47b9c3] font-gt uppercase text-[3rem]">Mustard Eye Tee</div>
                                <div className="mb-2 text-white md:mx-10 mx-[3rem] md:px-10 mb-5 font-poppins uppercase md:text-[1.5rem]">Small Left Chest Logo with Large Back Print on Bella & Canvas Tee</div>
                                <div className="w-fit flex flex-col md:flex-row mx-[4rem] ">
                                    <img className="md:h-[30rem] md:w-[30rem] my-1 border-[.2rem] border border-white cursor-pointer" src={mustardback} onClick={() => onOpenModal(mustardback)} />
                                    <img className="md:h-[30rem] md:w-[30rem] my-1 border-[.2rem] border border-white cursor-pointer" src={mustardfront} onClick={() => onOpenModal(mustardfront)} />
                                    <img className="md:h-[30rem] md:w-[30rem] my-1 border-[.2rem] border border-white cursor-pointer" src={mustardback} onClick={() => onOpenModal(mustardback)} />
                                </div>
                                <div className="my-[2rem]">
                                    <div className="text-[#47b9c3] font-gt uppercase text-[4rem]">
                                        <p className="my-2">20$</p>
                                    </div>
                                    <stripe-buy-button
                                        buy-button-id="buy_btn_1PKLPfB3OInBaAUn3ZyarQ0j"
                                        publishable-key="pk_live_51NOKTIB3OInBaAUnvrJx5QEK7UKLkB1sRz2R9vixw3X7k0rxLGHmn4XT370M2NOtuQXsikfozTt2GnYteNfUjwbQ00lk56yFck"
                                    >
                                    </stripe-buy-button>
                                </div>
                            </div>
                            <div className="border-3 border border-black p-10 bg-black bg-opacity-95">
                                <div className="mb-2 text-[#47b9c3] font-gt uppercase text-[3rem]">Clementine Tee</div>
                                <div className="mb-2 text-white md:mx-10 md:px-10 mb-5 font-poppins uppercase md:text-[1.5rem]">Oversized Back Print With left chest logo print on Bella & Canvas Tee</div>
                                <div className="w-fit flex flex-col md:flex-row mx-[4rem]">
                                    <img className="md:h-[30rem] md:w-[30rem] my-1 border-[.2rem] border border-[#e3b505] cursor-pointer" src={clem} onClick={() => onOpenModal(clem)} />
                                    <img className="md:h-[30rem] md:w-[30rem] my-1 border-[.2rem] border border-[#e3b505] cursor-pointer" src={clem2} onClick={() => onOpenModal(clem2)} />
                                    <img className="md:h-[30rem] md:w-[30rem] my-1 border-[.2rem] border border-[#e3b505] cursor-pointer" src={clem} onClick={() => onOpenModal(clem)} />
                                </div>
                                <div className="my-[2rem]">
                                    <div className="text-[#47b9c3] font-gt uppercase text-[4rem]">
                                        <p className="my-2">25$</p>
                                    </div>
                                    <stripe-buy-button
                                        buy-button-id="buy_btn_1PgS06B3OInBaAUnXs4Oh1lj"
                                        publishable-key="pk_live_51NOKTIB3OInBaAUnvrJx5QEK7UKLkB1sRz2R9vixw3X7k0rxLGHmn4XT370M2NOtuQXsikfozTt2GnYteNfUjwbQ00lk56yFck"
                                    >
                                    </stripe-buy-button>
                                </div>
                            </div>
                            <div className="border-3 border border-black p-10 bg-black bg-opacity-95">
                                <div className="mb-2 text-[#47b9c3] font-gt uppercase text-[3rem]">The Line Cook Tee</div>
                                <div className="mb-2 text-white md:mx-10 mx-[3rem] md:px-10 mb-5 font-poppins uppercase md:text-[1.5rem]">Small Left Chest Logo with Large Back Print on American Apparel Tee</div>
                                <div className="w-fit flex flex-col md:flex-row mx-[4rem] ">
                                    <img className="md:h-[30rem] md:w-[30rem] my-1 border-[.2rem] border border-white cursor-pointer" src={shirt} onClick={() => onOpenModal(shirt)} />
                                    <img className="md:h-[30rem] md:w-[30rem] my-1 border-[.2rem] border border-white cursor-pointer" src={shirt1} onClick={() => onOpenModal(shirt1)} />
                                    <img className="md:h-[30rem] md:w-[30rem] my-1 border-[.2rem] border border-white cursor-pointer" src={shirt2} onClick={() => onOpenModal(shirt2)} />
                                </div>
                                <div className="my-[2rem]">
                                    <div className="text-[#47b9c3] font-gt uppercase text-[4rem]">
                                        <p className="my-2">20$</p>
                                    </div>
                                    <stripe-buy-button
                                        buy-button-id="buy_btn_1PKLWxB3OInBaAUnRpZFl4hs"
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
            <Modal open={open} onClose={onCloseModal} center>
                <img src={selectedImage} alt="Popup" className="w-full h-full" />
            </Modal>
        </main>
    );
};

export default Merch;
