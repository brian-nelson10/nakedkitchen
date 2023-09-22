import React, { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import "./home.css";
import Footer from "../components/Footer";
import useWindowSize from "../components/hooks/useWindowSize";
import Navbar from "../components/Navbar";
// import Button from "../components/Button/button";
import LunchDinnerHero from "../components/MenuHero/lunchDinner";
import LunchDinnerSubmenu from "../components/Submenu/lunchDinner";

const MenuLunchDinner = () => {
    const myRef = useRef(null);
    const [menuState, setMenuState] = useState(false);
    const handleStateChange = () => {
        setMenuState((prevState) => !prevState);
    }
    const [width, setWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    useEffect(() => {
        if (menuState) {
            myRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [menuState]);
    React.useState(() => {
        typeof windows !== "undefined" && window.scrollTo(0, 0);
    }, []);
    //Hook to grab window size
    const size = useWindowSize();
    // Ref for parent div and scrolling div
    const app = useRef();
    const scrollContainer = useRef();

    // Configs
    const data = {
        ease: 0.1,
        current: 0,
        previous: 0,
        rounded: 0
    };

    // Run scrollrender once page is loaded.
    useEffect(() => {
        requestAnimationFrame(() => skewScrolling());
    }, []);

    //set the height of the body.
    useEffect(() => {
        setBodyHeight();
    }, [size.height]);

    //Set the height of the body to the height of the scrolling div
    const setBodyHeight = () => {
        document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height
            }px`;
    };

    // Scrolling
    const skewScrolling = () => {
        //Set Current to the scroll position amount
        data.current = window.scrollY;
        // Set Previous to the scroll previous position
        data.previous += (data.current - data.previous) * data.ease;
        // Set rounded to
        data.rounded = Math.round(data.previous * 100) / 100;
        // Difference between
        const difference = data.current - data.rounded;
        const acceleration = difference / size.width;
        const velocity = +acceleration;
        const skew = velocity * .5;
        //Assign skew and smooth scrolling to the scroll container
        scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;
        //loop vai raf
        requestAnimationFrame(() => skewScrolling());
    };
    return (
        <main className="bg-[#dbe7e8]">
            <div ref={app} className="h-[100%] w-[100%] overflow-hidden">
                <div ref={scrollContainer} className="scroll h-[100%] w-[100%] overflow-hidden ">
                    <section className="z-50">
                        <Navbar />
                    </section>
                    <section ref={myRef} className="grid grid-rows-3 w-screen text-center h-[67rem] z-40 px-[2rem] pt-[20rem] bg-fixed -space-y-[10rem] grass">
                        <LunchDinnerHero />
                    </section>
                    <section className="relative h-fit overflow-hidden bg-[#1b3d38]">
                        <div className="-mt-10 mb-[20rem]">
                            <LunchDinnerSubmenu />
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

export default MenuLunchDinner;
