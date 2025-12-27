import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const text = "2336 N LIBERTY ST JACKSONVILLE, FL 32206";

export default function TypewriterText() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;

      if (i === text.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.p
      className="font-roboto text-3xl text-bold text-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.p>
  );
}
