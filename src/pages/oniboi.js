import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import OniNavbar from "../components/Navbar/oniNavBar";
import oniMenu from "../assets/images/onigiriSampleMenu.png"

export default function OniBoi() {
  const [step, setStep] = useState(-1); // Start before first step
  const [reveal, setReveal] = useState(false); // control background reveal swipe
  const [isIntro, setIsIntro] = useState(true); // switch className after intro
  const [showBg, setShowBg] = useState(false); // fade in background

  const menuRef = useRef(null);

  // Smooth scroll to menu with offset for fixed navbar
  const scrollToMenu = () => {
    if (menuRef.current) {
      const navOffset = 80; // adjust if your navbar height differs
      const top = menuRef.current.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // Delay the very first phrase by 1 second
  useEffect(() => {
    const timer = setTimeout(() => setStep(0), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Parallax (foreground only) — background stays fixed
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 600], [0, -60]); // subtle lift as you scroll
  const yImage = useTransform(scrollY, [0, 600], [0, 90]); // slightly faster on the menu image

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

        // Start fading background during reveal (and ensure mobile friendliness)
        setTimeout(() => setShowBg(true), 300);

        // Swap to main background after reveal completes
        setTimeout(() => setIsIntro(false), 1000);
      }, 500);
    }
  };

  return (
    <div
      className={`${isIntro ? "intro-text" : "oni"} relative overflow-hidden flex flex-col items-center justify-center min-h-[100dvh]`}
    >
      {/* Fixed Background Layer (mobile-friendly) */}
      {!isIntro && (
        <motion.div
          aria-hidden
          className="fixed inset-0 bg-center bg-cover bg-no-repeat pointer-events-none"
          style={{ backgroundImage: "url('/your-background-image.jpg')", willChange: "opacity" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: showBg ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      )}

      <AnimatePresence mode="wait">
        {step >= 0 && step < steps.length ? (
          <motion.h1
            key={steps[step].text}
            className="text-[#CFA434] font-roboto text-7xl md:text-9xl font-bold text-center z-10 px-4"
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
                  onAnimationComplete={() => setReveal(false)}
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
              className="w-full min-h-[100dvh] flex flex-col items-center justify-center p-6 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 2.0, delay: 1.6 } }}
            >
              <motion.h2
                style={{ y: yText }}
                className="text-[#CFA434] uppercase text-2xl md:text-7xl mt-1 md:mt-0 mb-[8rem] font-roboto font-bold text-center"
              >
                Welcome to Oniboi
              </motion.h2>

              <motion.p
                style={{ y: yText }}
                className="text-white uppercase font-bold text-sm md:text-xl max-w-xl text-center px-2 py-4 md:px-4 bg-black bg-opacity-70 rounded-xl"
              >
                When the clock strikes midnight, the Oni stirs—hungry, restless, searching for something more than the ordinary. Out of the shadows comes Oniboi, where Japanese soul meets late-night mischief, wrapped in rice and a little bit of rebellion.
                <br />
                <br />
                Our craft? Onigiri—those humble rice triangles of tradition—reborn with a Western twist. Think smoky, melty, crunchy, saucy—flavors you know but never expected to find tucked inside a rice ball. It’s comfort food with a pulse, heritage with a side of hype.
                <br />
                <br />
                At Oniboi, rice isn’t just the vessel—it’s the canvas. We’re painting in bold strokes, from cheeseburger riffs to kimchi-laced fire, giving the midnight snack a new mythology.
                <br />
                <br />
                Step into the lore. Bite into the myth.
              </motion.p>

              <motion.p
                style={{ y: yText }}
                className="mt-10 text-[#CFA434] uppercase font-bold text-lg md:text-2xl max-w-xl text-center bg-black bg-opacity-70 p-2 rounded-xl"
              >
                Oniboi: where rice meets mischief.
              </motion.p>

              {/* MENU Button */}
              <motion.button
                onClick={scrollToMenu}
                whileTap={{ scale: 0.96 }}
                className="mt-10 px-6 py-3 bg-[#CFA434] text-black font-bold rounded-xl hover:bg-[#b8942f] transition active:scale-95"
                aria-label="Scroll to menu"
              >
                MENU
              </motion.button>
            </motion.div>

            {/* Menu Section */}
            <section
              ref={menuRef}
              className="w-full flex flex-col items-center justify-center py-24 bg-black/80 backdrop-blur-sm relative z-10"
            >
              <h3 className="text-[#CFA434] text-3xl md:text-5xl font-bold uppercase font-roboto mb-8 text-center px-4">Our Menu</h3>
              <motion.img
                style={{ y: yImage }}
                // src={oniMenu}
                alt="Menu placeholder"
                className="w-11/12 md:w-2/3 rounded-xl shadow-lg"
                loading="lazy"
              />
            </section>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}