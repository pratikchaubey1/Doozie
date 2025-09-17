// src/components/HeroSection/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import BackGround from "../../assets/BackGround.png";
import { backgroundAnim, heroContainerAnim, heroTitleAnim, heroButtonAnim } from "./animations";

const HeroSection = () => {
  return (
    <div className="bg-[#ceccc7] w-full min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BackGround})` }}
        {...backgroundAnim}
      />

      {/* Hero Content */}
      <motion.div
        className="absolute bottom-10 inset-x-0 flex flex-col items-center gap-6 px-4"
        {...heroContainerAnim}
      >
        <motion.h1
          className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-gray-100 text-center"
          {...heroTitleAnim}
          whileHover={{ scale: 1.05 }}
        >
          Gifts That Speak Your Heart
        </motion.h1>

        <motion.div
          className="flex gap-4 sm:gap-6 font-medium text-sm sm:text-md"
          {...heroButtonAnim}
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
  );
};

export default HeroSection;
