import React from 'react';
import PdfViewer from '../components/PDF';
import "./home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Button from "../components/Button/button";
import CateringNext from "../components/NextMenu/catering";
import PopUpHero from "../components/MenuHero/popup";
// import PDF from "../assets/images/popupMenu2.0.pdf"
const PopUpMenu = () => {
  //   const pdfPath = "../assets/images/popupMenu2.0.pdf";
  return (
    <main className="">
      <div className="scroll h-[100%] w-[100%] overflow-hidden">
        <section className="z-50">
          <Navbar />
        </section>
        <section className="grid grid-rows-3 w-screen text-center h-[67rem] z-40 px-[2rem] pt-[20rem] -space-y-[10rem] grass">
          <PopUpHero />
        </section>
        <section className="relative h-fit overflow-hidden grass">
          <div className="m-2 md:mx-[18rem] mb-[5rem]">
            <PdfViewer />
          </div>
          {/* <div>
            <Carousel />
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

export default PopUpMenu;
