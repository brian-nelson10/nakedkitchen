import React from 'react';
import PdfViewer from '../components/PDF';
// import PDF from "../assets/images/popupMenu2.0.pdf"


const PopUpMenu = () => {
//   const pdfPath = "../assets/images/popupMenu2.0.pdf";

  return (
    <main className='merch h-[150rem]'>
      <h1 className='font-psych text-center pt-[5rem] text-[4rem] text-[#e3b505] drop-shadow-[4px_4px_0px_rgba(0,0,0)]'>POPUP MENU!!!!</h1>
      <div className='pt-10'>
      <PdfViewer />
      </div>
    </main>
  );
};

export default PopUpMenu;
