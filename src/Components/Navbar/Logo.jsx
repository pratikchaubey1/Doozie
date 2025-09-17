import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Logo = ({ isLanding, logoSize, logoY, logoX, isScroll }) => {
  return (
    <Link to="/" className="font-playfair tracking-widest">
      <div className="flex justify-center items-center">
        <motion.h1
          style={
            isLanding
              ? { fontSize: logoSize, y: logoY, x: logoX }
              : { fontSize: "2vw", y: 0 }
          }
          className={`font-serif tracking-widest mt-7 text-center transition-colors duration-500 ${
            isScroll ? "text-gray-900" : "text-white"
          }`}
        >
          D O O Z I E
        </motion.h1>
      </div>
    </Link>
  );
};

export default Logo;
