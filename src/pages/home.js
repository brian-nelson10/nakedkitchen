import React from "react";
import IntroAnimation from "../components/IntroAnimation";
import "./home.css";
import Hamburger from "../components/Hamburger";
import nklogo from "../assets/images/nkwhite.png"
import WritingText from "../components/WritingText";

const Home = () => {
    return (
        <main className="bg-white">
            <section className="grid grid-cols-3 w-screen z-50 fixed px-[2rem]">
            <div className="grid items-center mb-4 z-40">
                <IntroAnimation/>
            </div>
            
            <div className="grid justify-center text-center h-[12rem] w-[12rem] mx-[12rem]" >
            
                <img src={nklogo} alt="nk logo" className="z-50" />
            </div>
            <div className="grid items-center justify-end text-end items-end z-50 mb-4">
                <Hamburger/>
            </div>
            </section>
            <section className="relative h-[200rem] overflow-hidden">
            <hr className="border-black border-b-2 pt-[6.6rem] mx-[2rem]"/>
            <section className="w-screen h-screen  absolute inset-0">
                <div className="mx-[5rem] my-[15rem] pt-[55rem] justify-center text-center flex">
               <WritingText/>
               </div>
            </section>
            </section>
        </main>
    );
};

export default Home;