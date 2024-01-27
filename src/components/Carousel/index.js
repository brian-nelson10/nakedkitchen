import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import photo0 from "../../assets/images/kimchiPink.png";
import photo1 from '../../assets/images/pastrami.png';
import photo2 from '../../assets/images/chorizo.png';
import photo3 from '../../assets/images/brusselsYellow.png';
import photo4 from '../../assets/images/crispygreen.png';
import photo5 from '../../assets/images/gnocchi.png';
import photo6 from '../../assets/images/ceviche.png';
import photo7 from '../../assets/images/chipped.png';
import photo8 from '../../assets/images/hoisinPnutTaco.png';

// import './Carousel.css'; // Import your custom Tailwind CSS styles

const images = [
  `${photo0}`,
  `${photo1}`,
  `${photo2}`,
  `${photo3}`,
  `${photo4}`,
  `${photo5}`,
  `${photo6}`,
  `${photo7}`,
  `${photo8}`
];

const CarouselComponent = () => {
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
        autoPlay={true}
        autoPlaySpeed={3000}
        transitionDuration={800}
        infinite={true}
        showDots={false}
      >
        {images.map((image, index) => (
          <div className="h-full w-full flex" key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;

// const photos = [photo0, photo1, photo2, photo3, photo4, photo5, photo6, photo0, photo1, photo2, photo3, photo4, photo5, photo6, photo0];
// const slideDuration = 15; // in seconds

// const Carousel = () => {
//   const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
//     }, slideDuration * 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full h-[40rem] px-[3rem] my-[2rem] pb-[6rem] overflow-hidden relative">
//       <AnimatePresence initial={true} exitBeforeEnter>
//         <motion.div
//           key={currentPhotoIndex}
//           className="md:w-full md:h-full flex"
//           initial={{ x: '100%' }}
//           animate={{ x: '-700%' }}
//           exit={{ x: '-600%' }}
//           transition={{ duration: slideDuration, ease: 'linear', repeat: Infinity }}
//         >
//           {photos.map((photo, index) => (
//             <motion.img
//               key={index}
//               src={photo}
//               alt={`Photo ${index + 1}`}
//               className="md:w-[40rem] md:h-[40rem] md:flex-shrink-0"
//             />
//           ))}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Carousel;
