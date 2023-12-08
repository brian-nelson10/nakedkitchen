import React from 'react';
import img1 from "../../assets/images/catering1.jpg"
import img2 from "../../assets/images/cateringEggs.jpeg"
import img3 from "../../assets/images/catering2.jpg"
import img4 from "../../assets/images/catering4.jpg"
import img5 from "../../assets/images/cateringSando.jpeg"
import img6 from "../../assets/images/cateringSalad.jpeg"

const CateringImages = () => {
  return (
    <div className="container mx-auto -px-1 py-8 space-y-6">
      <div className="md:flex md:flex-row gap-4">
        <div className="border-2 md:border-8 border-black ">
          <img
            src={img1}
            alt="Image 1"
            className="w-auto h-full"
          />
        </div>
        <div className="border-2 md:border-8 border-black">
          <img
            src={img2}
            alt="Image 2"
            className="w-auto h-full"
          />
        </div>
        <div className="border-2 md:border-8 border-black">
          <img
            src={img3}
            alt="Image 3"
            className="w-auto h-auto"
          />
        </div>
      </div>
      <div className="md:flex md:flex-row gap-4">
        <div className="border-2 md:border-8 border-black ">
          <img
            src={img4}
            alt="Image 1"
            className="w-auto h-full"
          />
        </div>
        <div className="border-2 md:border-8 border-black">
          <img
            src={img5}
            alt="Image 2"
            className="w-auto h-auto"
          />
        </div>
        <div className="border-2 md:border-8 border-black">
          <img
            src={img6}
            alt="Image 3"
            className="w-auto h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CateringImages;
