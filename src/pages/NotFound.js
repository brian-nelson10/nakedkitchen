import React from "react";
import logo from "../assets/images/logo8.png"

const NotFound = () => {
    return (
    <>
    <div className="flex flex-col justify-center items-center text-center h-screen w-screen grass">
    <div className="font-gt uppercase text-[3rem] tracking-widest text-center m-[3rem] pt-8">Coming Soon.. like.. Soon-Soon.</div>
    <img className="w-[8rem] h-[8rem] " alt="naked kitchen logo yo" src={logo} />
    </div>
    </>
    );
};

export default NotFound;