// src/components/CategoriesSection/CategoriesSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { categories } from "./categoriesData";
import { categoryTitleAnim, categoryCardAnim } from "./animations";
import { Link } from "react-router-dom";  // ✅ sahi import

const CategoriesSection = () => {
  return (
    <div className="relative w-full">
      <motion.div
        className="mt-16"
        {...categoryTitleAnim}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl font-medium mb-6 text-black text-center">
          Who Are You Gifting Today?
        </h1>
      </motion.div>

      <div className="px-4 sm:px-10 mt-15 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
  {categories.map((item, index) => (
    <Link to={item.path} key={item.id}>
      <motion.div
        {...categoryCardAnim(index)}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2, ease: "easeOut" },
        }}
        whileTap={{
          scale: 0.95,
          transition: { duration: 0.1 },
        }}
        className="bg-amber-50 hover:bg-white overflow-hidden cursor-pointer  shadow-md"
      >
        <img
          src={item.IMG}
          alt={item.Name}
          className="w-full h-72 object-cover"
        />
        <h1 className="text-xl font-semibold text-black text-center py-3">
          {item.Name}
        </h1>
      </motion.div>
    </Link>
  ))}
</div>

    </div>
  );
};

export default CategoriesSection;
