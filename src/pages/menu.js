import React from 'react';
import { motion } from 'framer-motion';
import "./home.css"
import background1 from "../assets/images/veggies.jpeg";

const columns = [
  {
    header: 'BREAKFAST',
    image: 'menu',

  },
  {
    header: 'LUNCH & DINNER',
    image: 'menu1',
  },
  {
    header: 'DRINKS',
    image: 'menu2',
  },
];

const App = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {columns.map((column, index) => (
        <motion.div
          key={index}
          className={`flex-1 h-full border-l-2 border-r-2 border-black ${
            index < columns.length - 1 ? 'border-solid' : ''
          }`}
          style={{
            backgroundImage: `${column.image}`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          whileHover={{ scale: 1.05 }} // Zoom in effect on hover
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className={`h-full flex flex-col justify-center items-center text-[#dbe7e8] text-xl ${column.image}`}>
            <h2 className="mb-10 font-summer uppercase text-[4rem] text ">{column.header}</h2>
            {/* Additional content can be added here */}
            <a className="button-background-move-menu hover:cursor-pointer z-50 font-gt" href={column.link}>
            <span className="font-gt uppercase text-[3rem]">open menu</span>
        </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default App;
