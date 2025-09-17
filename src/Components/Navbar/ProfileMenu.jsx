import React from "react";
import { FiUser } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { dropdownVariants } from "./navbarAnimations";

const ProfileMenu = ({ profileOpen, setProfileOpen }) => {
  const menuItems = [
    { to: "/signin", text: "SIGN IN" },
    { to: "/orders", text: "MY ORDERS" },
    { to: "/account", text: "ACCOUNT SETTINGS" },
    { to: "/address", text: "ADDRESS BOOK" },
    { to: "/wallet", text: "WALLET" },
    { to: "/saved", text: "SAVED ITEMS" },
    { to: "/appointments", text: "MY APPOINTMENTS" },
  ];

  return (
    <>
      <button
        onClick={() => setProfileOpen(!profileOpen)}
        className="hover:text-red-700 transition-all duration-300 border-b-2 border-transparent hover:border-red-700"
      >
        <FiUser className="text-2xl" />
      </button>

      <AnimatePresence>
        {profileOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            className="absolute right-6 top-14 bg-white shadow-lg rounded-md w-56 z-50 font-poppins"
          >
            {menuItems.map((item, i) => (
              <Link
                key={i}
                to={item.to}
                className="block px-4 py-2 mt-4 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                {item.text}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProfileMenu;
