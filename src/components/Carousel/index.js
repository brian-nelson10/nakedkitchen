import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import photo1 from '../../assets/images/photo1.jpg';
import photo2 from '../../assets/images/photo2.jpg';
import photo3 from '../../assets/images/photo3.jpg';

const photos = [photo1, photo2, photo3];

const Carousel = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[60rem] px-[3rem] my-[2rem] pb-[6rem] flex justify-center items-center">
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.img
          key={currentPhotoIndex}
          src={photos[currentPhotoIndex]}
          alt={`Photo ${currentPhotoIndex + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: .5 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
