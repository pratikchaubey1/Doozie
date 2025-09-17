import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext/ProductContext";

const Logo = () => {
  const { logoSize, logoY, logoX, isScroll } = useContext(ProductContext);
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <Link to="/" className="font-playfair tracking-widest">
      <div className="flex justify-center items-center">
        <motion.h1
          style={
            isLanding
              ? { fontSize: logoSize, y: logoY, x: logoX } // Landing pe animation
              : { fontSize: "2vw", y: 0 } // Dusre pages pe normal size
          }
          className={`font-serif tracking-widest mt-7 text-center transition-colors duration-500 ${
            isScroll ? "text-gray-900" : isLanding ? "text-white" : "text-gray-900"
          }`}
        >
          D O O Z I E
        </motion.h1>
      </div>
    </Link>
  );
};

export default Logo;
