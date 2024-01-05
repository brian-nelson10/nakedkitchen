import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import photo0 from "../../assets/images/kimchiPink.png";
import photo1 from '../../assets/images/pastrami.png';
import photo2 from '../../assets/images/chorizo.png';
import photo3 from '../../assets/images/brusselsYellow.png';
import photo4 from '../../assets/images/crispygreen.png';
import photo5 from '../../assets/images/gnocchi.png';

const photos = [photo0, photo1, photo2, photo3, photo4, photo5, photo0];
const slideDuration = 11; // in seconds

const Carousel = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, slideDuration * 1000);

    return () => clearInterval(interval);
  }, []);

  const prevPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
  const nextPhotoIndex = (currentPhotoIndex + 1) % photos.length;

  return (
    <div className="w-full h-[40rem] px-[3rem] my-[2rem] pb-[6rem] overflow-hidden relative">
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={currentPhotoIndex}
          className="w-full h-full flex"
          initial={{ x: '0%' }}
          animate={{ x: '-150%' }}
          exit={{ x: '0%' }}
          transition={{ duration: slideDuration, ease: 'linear' }}
        >
          {photos.map((photo, index) => (
            <motion.img
              key={index}
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-[40rem] h-[40rem] flex-shrink-0"
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
