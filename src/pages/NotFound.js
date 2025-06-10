import React from "react";
import logo from "../assets/images/logo8.png"

const NotFound = () => {
    return (
    <>
    <div className="flex flex-col justify-center items-center text-center ">
    <div className="font-gt uppercase text-[3rem] tracking-widest text-center m-[3rem] pt-8">Coming Soon..</div>
    <img className="w-[8rem] h-[8rem] " src={logo} />
    </div>
    </>
    );
};

export default NotFound;