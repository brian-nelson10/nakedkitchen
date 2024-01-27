import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import photo0 from "../../assets/images/linecooktee2.png";
import photo1 from '../../assets/images/linecookteeclouds.png';
import photo2 from '../../assets/images/linecookteeclouds2.png';

const images = [
  `${photo0}`,
  `${photo1}`,
  `${photo2}`,
  `${photo0}`,
  `${photo1}`,
  `${photo2}`,
];

const MerchCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="carousel-container">
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        showDots={false}
      >
        {images.map((image, index) => (
          <div className="h-[25rem] w-[25rem] m-8" key={index}>
            <img className="" src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MerchCarousel;
