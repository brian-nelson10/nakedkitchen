import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import "./home.css"

const columns = [
  {
    header: 'BREAKFAST',
    image: 'menu',
    link: "/breakfast",

  },
  {
    header: 'LUNCH & DINNER',
    image: 'menu1',
    link: "/lunch&dinner"
  },
  {
    header: 'DRINKS',
    image: 'menu2',
    link: "/drinks"
  },
];

const Menu = () => {
    const navigate = useNavigate();
    const handleLinkClick = (link) => {
        navigate(link);
    };
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
          onClick={() => handleLinkClick(column.link)}
        >
          <div className={`h-full flex flex-col justify-center items-center text-[#dbe7e8] text-xl ${column.image}`}>
            <h2 className="mb-10 font-summer uppercase text-[4rem] text ">{column.header}</h2>
            {/* Additional content can be added here */}
            <div className="button-background-move-menu hover:cursor-pointer z-50 font-gt" onClick={(e) => {
                e.stopPropagation(); // Prevent the parent's onClick from firing
                handleLinkClick(column.link);
              }}>
            <span className="font-gt uppercase text-[3rem]">open menu</span>
        </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Menu;
