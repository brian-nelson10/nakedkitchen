import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OniNavbar from "../components/Navbar/oniNavBar";

export default function OniBoi() {
  const [step, setStep] = useState(-1); // Start before first step
  const [reveal, setReveal] = useState(false); // control background reveal swipe
  const [isIntro, setIsIntro] = useState(true); // switch className after intro

  const menuRef = useRef(null);

  const scrollToMenu = () => {
    if (menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Delay the very first phrase by 1 second
  useEffect(() => {
    const timer = setTimeout(() => setStep(0), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Variants for fade in/out text
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
    exit: { opacity: 0, transition: { duration: 1.0 } },
  };

  // NavBar animation (fall down)
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  // Background reveal swipe
  const revealVariants = {
    hidden: { y: 0 },
    visible: { y: "100%", transition: { duration: 1, ease: "easeInOut" } },
  };

  // Steps text
  const steps = [
    { text: "NAKED KITCHEN PRESENTS", duration: 2000 },
    { text: "ONI BOI", duration: 2000 },
    { text: "A UNIQUE ONIGIRI POPUP", duration: 2000 },
  ];

  // Handle transitions
  const handleAnimationComplete = () => {
    if (step < steps.length - 1) {
      setTimeout(() => setStep(step + 1), 500);
    } else {
      setTimeout(() => {
        setStep(steps.length);
        setReveal(true);
        // Switch className after reveal animation
        setTimeout(() => setIsIntro(false), 1000);
      }, 500);
    }
  };

  return (
    <div
      className={`${isIntro ? "intro-text" : "oni"} min-h-screen flex flex-col items-center justify-center relative overflow-hidden`}
    >
      <AnimatePresence mode="wait">
        {step >= 0 && step < steps.length ? (
          <motion.h1
            key={steps[step].text}
            className="text-[#CFA434] font-roboto text-7xl md:text-9xl font-bold text-center"
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onAnimationComplete={handleAnimationComplete}
          >
            {steps[step].text}
          </motion.h1>
        ) : step >= steps.length ? (
          <>
            {/* Overlay swipe reveal */}
            <AnimatePresence>
              {reveal && (
                <motion.div
                  key="reveal"
                  className="absolute inset-0 bg-black z-40"
                  variants={revealVariants}
                  initial="hidden"
                  animate="visible"
                  exit="visible"
                />
              )}
            </AnimatePresence>

            {/* Falling NavBar */}
            <motion.div
              className="fixed top-0 left-0 right-0 z-50"
              variants={navVariants}
              initial="hidden"
              animate="visible"
            >
              <OniNavbar />
            </motion.div>

            {/* Main Page Content */}
            <motion.div
              key="main-content"
              className="w-full min-h-screen flex flex-col items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 2.5, delay: 2 } }}
            >
              {/* --- Vanilla Shell --- */}
              <h2 className="text-[#CFA434] uppercase text-2xl md:text-7xl mt-1 md:mt-0 mb-6 font-roboto font-bold">
               Welcome to Oniboi
              </h2>
              <p className="text-white uppercase font-bold text-md md:text-xl max-w-xl text-center">
                When the clock strikes midnight, the Oni stirs—hungry, restless, searching for something more than the ordinary. Out of the shadows comes Oniboi, where Japanese soul meets late-night mischief, wrapped in rice and a little bit of rebellion.

                Our craft? Onigiri—those humble rice triangles of tradition—reborn with a Western twist. Think smoky, melty, crunchy, saucy—flavors you know but never expected to find tucked inside a rice ball. It’s comfort food with a pulse, heritage with a side of hype.

                At Oniboi, rice isn’t just the vessel—it’s the canvas. We’re painting in bold strokes, from cheeseburger riffs to kimchi-laced fire, giving the midnight snack a new mythology.

                Step into the lore. Bite into the myth.
              </p>
              <p className="mt-8 text-[#CFA434] uppercase font-bold text-lg md:text-2xl max-w-xl text-center">
                Oniboi: where rice meets mischief.
              </p>

              {/* MENU Button */}
              <button
                onClick={scrollToMenu}
                className="mt-10 px-6 py-3 bg-[#CFA434] text-black font-bold rounded-xl hover:bg-[#b8942f] transition"
              >
                MENU
              </button>
            </motion.div>

            {/* Menu Section */}
            <div ref={menuRef} className="w-full flex flex-col items-center justify-center py-20 bg-black">
              <h3 className="text-[#CFA434] text-3xl md:text-5xl font-bold mb-8">Our Menu</h3>
              <img
                src="/menu-placeholder.jpg"
                alt="Menu placeholder"
                className="w-11/12 md:w-2/3 rounded-xl shadow-lg"
              />
            </div>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
