import React from 'react';
import hero from "../../assets/images/wall1.jpg"

const TwoColumn = () => {
  return (
    <div className="grid flex grid-cols-2 justify-center gap-2 items-center justify-items-center">
    
      <div className="w-[45rem] h-[57rem] px-[1rem] justify-items-center mx-[1rem] ml-[1rem]">
        <img
          src={hero}
          alt="hero"
          className="w-[45rem] h-[57rem] rounded-md"
        />
      </div>

      <div className="w-full md:w-1/2 p-4 mr-[8rem] justify-items-start items-center">
        <h1 className="text-[5rem] font-bold mb-4 font-mentra">A Glass of Love Never Killed Nobody</h1>
        <p className="text-lg border border-black p-6 m-4 w-[32rem] h-[20rem] font-poppins">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          euismod urna ut sagittis efficitur. Fusce eu mauris eu metus
          sollicitudin luctus nec at massa. Integer vitae velit sit amet mi
          fringilla varius nec in libero. Phasellus in justo eu sem dictum
          rhoncus.
        </p>
      </div>
    </div>
  );
};

export default TwoColumn;
