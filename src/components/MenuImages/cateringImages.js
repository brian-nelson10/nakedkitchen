import React from 'react';
import img1 from "../../assets/images/catering1.jpg"
import img2 from "../../assets/images/catering2.jpg"
import img3 from "../../assets/images/catering4.jpg"

const CateringImages = () => {
  return (
    <div className="container mx-auto -px-1 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border border-black ">
          <img
            src={img1}
            alt="Image 1"
            className="w-full h-[40rem]"
          />
        </div>
        <div className="border border-black">
          <img
            src={img2}
            alt="Image 2"
            className="w-full h-[40rem]"
          />
        </div>
        <div className="border border-black">
          <img
            src={img3}
            alt="Image 3"
            className="w-full h-[40rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default CateringImages;
