import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OniNavbar from "../components/Navbar/oniNavBar";

export default function OniBoi() {
  const [step, setStep] = useState(-1); // Start before first step

  // Delay the very first phrase by 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setStep(0), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Variants for fade in/out
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
    exit: { opacity: 0, transition: { duration: 0.8 } },
  };

  // NavBar animation (fall down)
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
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
      setTimeout(() => setStep(step + 1), 500); // quick pause before next fade in
    } else {
      setTimeout(() => setStep(steps.length), 500);
    }
  };

  return (
    <div className="oni min-h-screen flex items-center justify-center bg-black relative">
      <AnimatePresence mode="wait">
        {step >= 0 && step < steps.length ? (
          <motion.h1
            key={steps[step].text}
            className="text-white font-roboto text-5xl md:text-7xl font-bold text-center"
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
              className="w-full h-full flex flex-col items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1.5 } }}
            >
              {/* --- Vanilla Shell --- */}
              <h2 className="text-white text-3xl md:text-5xl mb-6 font-roboto font-bold">
                Main Page Content
              </h2>
              <p className="text-white/80 text-lg max-w-xl text-center">
                Replace this skeleton with your actual content.
              </p>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
