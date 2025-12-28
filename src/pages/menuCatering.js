import React from "react";
import "./home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CateringHero from "../components/MenuHero/catering";
import LunchDinnerNext from "../components/NextMenu/lunchDinner";
import BreakfastNext from "../components/NextMenu/breakfast";
import PdfViewerCater from "../components/PDF/catering";
import PdfViewerCater2 from "../components/PDF/cateringTwo";
import CateringImages from "../components/MenuImages/cateringImages";
import CateringLanding from "../components/Catering/cateringLanding";
// import Carousel from "../components/Carousel";

const MenuCatering = () => {

    return (
        <main className="">
            <div className="scroll h-[100%] w-[100%]">
                <section className="z-50">
                    <Navbar />
                </section>
                <section className="grid grid-rows-3 w-screen text-center h-[67rem] z-40 px-[2rem] pt-[20rem] bg-fixed -space-y-[10rem] catering">
                    <CateringHero />
                </section>
                <section className="relative h-fit overflow-hidden bg-transparent grass">
                    <CateringLanding />
                <div className="m-2 md:mx-[18rem] mb-[5rem]">
                        <PdfViewerCater />
                    </div>
                    <div className="m-2 md:mx-[18rem] mb-[5rem]">
                        <PdfViewerCater2 />
                    </div>
                    <div className="mb-[2rem]">
                        <CateringImages />
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
        </main>
    )
};

export default MenuCatering;
