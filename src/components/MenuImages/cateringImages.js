import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import photo1 from "../../assets/images/EY6A7004-min.jpg";
import photo2 from "../../assets/images/EY6A7007-min.jpg";
import photo3 from "../../assets/images/EY6A7012-min.jpg";
import photo4 from "../../assets/images/EY6A7014-min.jpg";
import photo5 from "../../assets/images/EY6A7270-min.jpg";
import photo6 from "../../assets/images/EY6A7023-min.jpg";

const images = [photo1, photo2, photo3, photo4, photo5, photo6];

export default function CateringImages() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-64 object-cover cursor-pointer rounded-lg shadow-md"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Modal */}
      <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="fixed inset-0 z-50">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-3xl w-full bg-white rounded-lg overflow-hidden shadow-xl">
            <img src={selectedImage} alt="Enlarged" className="w-full h-auto" />
            <div className="flex justify-end p-2">
              <button
                className="px-4 py-2 text-sm bg-gray-800 text-white rounded hover:bg-gray-700"
                onClick={() => setSelectedImage(null)}
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}


// import React from 'react';
// import img1 from "../../assets/images/catering1.jpg"
// import img2 from "../../assets/images/cateringEggs.jpeg"
// import img3 from "../../assets/images/catering2.jpg"
// import img4 from "../../assets/images/catering4.jpg"
// import img5 from "../../assets/images/cateringSando.jpeg"
// import img6 from "../../assets/images/cateringSalad.jpeg"

// const CateringImages = () => {
//   return (
//     <div className="container mx-auto -px-1 py-8 space-y-6">
//       <div className="md:flex md:flex-row gap-4">
//         <div className="border-2 md:border-8 border-black ">
//           <img
//             src={img1}
//             alt="Image 1"
//             className="w-auto h-full"
//           />
//         </div>
//         <div className="border-2 md:border-8 border-black">
//           <img
//             src={img2}
//             alt="Image 2"
//             className="w-auto h-full"
//           />
//         </div>
//         <div className="border-2 md:border-8 border-black">
//           <img
//             src={img3}
//             alt="Image 3"
//             className="w-auto h-auto"
//           />
//         </div>
//       </div>
//       <div className="md:flex md:flex-row gap-4">
//         <div className="border-2 md:border-8 border-black ">
//           <img
//             src={img4}
//             alt="Image 1"
//             className="w-auto h-full"
//           />
//         </div>
//         <div className="border-2 md:border-8 border-black">
//           <img
//             src={img5}
//             alt="Image 2"
//             className="w-auto h-auto"
//           />
//         </div>
//         <div className="border-2 md:border-8 border-black">
//           <img
//             src={img6}
//             alt="Image 3"
//             className="w-auto h-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CateringImages;
