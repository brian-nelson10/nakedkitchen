// import React from 'react';
// import PDF from "../../assets/images/takeoutMenu.png"
// const PdfViewer = () => {
//   return (
//     <div>
//       <img src={PDF} className='h-auto' />
//     </div>
//   );
// };

// export default PdfViewer;
import React, { useState } from 'react';
import PDF from "../../assets/images/takeoutMenu.png";

const PdfViewer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Preview */}
      <img
        src={PDF}
        alt="Takeout Menu"
        className="w-full h-auto cursor-zoom-in"
        onClick={() => setOpen(true)}
      />

      {/* Fullscreen Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <img
            src={PDF}
            alt="Takeout Menu Fullscreen"
            className="max-w-full max-h-full object-contain overflow-auto"
          />
        </div>
      )}
    </>
  );
};

export default PdfViewer;

