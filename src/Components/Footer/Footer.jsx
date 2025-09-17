import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

// Payment logos using online URLs
const paymentLogos = [
  { name: "Visa", url: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" },
  { name: "Mastercard", url: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" },
  { name: "PayPal", url: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
];

const socialVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  hover: { scale: 1.2, rotate: 10, transition: { type: "spring", stiffness: 300 } },
};

const Footer = () => {
  return (
    <div className="relative bg-black text-amber-50 ">
      {/* White overlay at the top */}
      <div className="absolute -top-10 left-0 w-full h-10 bg-white/20 rounded-t-3xl"></div>

      {/* Social icons top right */}
      <motion.div
        className="absolute top-6 right-6 flex gap-4 z-20"
        initial="hidden"
        animate="visible"
        variants={socialVariants}
      >
        <motion.a href="https://instagram.com" target="_blank" rel="noreferrer" whileHover="hover">
          <FaInstagram size={28} color="#E1306C" />
        </motion.a>
        <motion.a href="https://facebook.com" target="_blank" rel="noreferrer" whileHover="hover">
          <FaFacebookF size={28} color="#1877F2" />
        </motion.a>
      </motion.div>

      <div className="px-4 sm:px-10 py-16 md:py-20 relative z-10 flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl py-5 font-medium text-center">
          SIGN UP FOR LEVEL UPDATES
        </h1>

        {/* Info Text */}
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
          Get exclusive updates on the collection's launch,
        </p>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-5">
          personalized communication and the House's latest news.
        </p>

        {/* Contact Link */}
        <div className="text-center my-5">
          <a href="/Contact" className="text-lg sm:text-xl md:text-2xl py-3 font-medium hover:text-gray-400 transition">
            + Contact
          </a>
        </div>

        {/* DOOZIE Title */}
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-sans text-center my-10">
          D O O Z I E
        </h1>

        {/* Payments Icons Bottom Left */}
       

        {/* Footer Note */}
        <p className="text-center bg-black text-sm sm:text-base text-gray-400 mt-10">
          &copy; {new Date().getFullYear()} DOOZIE. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
