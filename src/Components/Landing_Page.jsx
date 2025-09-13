
import React from "react";
import BackGround from "../assets/BackGround.png";
import { motion } from "framer-motion";

function Landing_Page() {
  const categories = [
    {
      id: 1,
      Name: "Him",
      IMG: "https://i.pinimg.com/736x/39/72/78/397278070ed6594cc536969e50eef3c0.jpg",
    },
    {
      id: 2,
      Name: "Her",
      IMG: "https://i.pinimg.com/736x/77/20/b8/7720b892dabc49da8dbbf6b44ba1c2ac.jpg",
    },
    {
      id: 3,
      Name: "Couple",
      IMG: "https://i.pinimg.com/1200x/3a/8f/33/3a8f33ea01fce08b3b72377e6acda0c6.jpg",
    },
    {
      id: 4,
      Name: "Kid",
      IMG: "https://i.pinimg.com/736x/c1/bf/d7/c1bfd775ce5539357981bc6de0d80ed5.jpg",
    },
  ];

  return (
    <div>

    <div className="bg-[#ceccc7] w-full min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BackGround})` }}
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{
          opacity: { duration: 2, ease: "easeOut" },
          scale: {
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      />

      {/* Hero Section */}
      <motion.div
        className="absolute bottom-10 inset-x-0 flex flex-col items-center gap-6 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-gray-100 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          Gifts That Speak Your Heart
        </motion.h1>

        <motion.div
          className="flex gap-4 sm:gap-6 font-medium text-sm sm:text-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.button
            className="py-2 px-5 sm:py-3 sm:px-7 bg-transparent border border-gray-100 rounded-md text-black transition duration-300 ease-in-out hover:bg-black hover:text-white"
            whileHover={{ scale: 1.05 }}
          >
            Shop Now
          </motion.button>
        </motion.div>
      </motion.div>

       
     
    </div>
      {/* Categories Section */}
     <div className="relative w-full">
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl font-medium mb-6 text-black text-center">
            Who Are You Gifting Today?
          </h1>
        </motion.div>

        <div className="px-10 mt-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 },
              }}
              className="bg-white overflow-hidden   cursor-pointer"
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing_Page;
