import React, { useContext } from "react";
import { ProductContext } from "../Context/Context";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const {
    isScroll,
    logoSize,
    logoY,
    isOpen,
    setisOpen,
    isSearchOpen,
    setIsSearchOpen,
    profileOpen,
    setProfileOpen,
    dropdownVariants,
    overlayVariants,
    inputVariants,
    listItemVariants,
    logoX,
    scrolled,
    searchTerm,
    setSearchTerm,
    filteredProducts,
  } = useContext(ProductContext);

  const location = useLocation();
  const isLanding = location.pathname === "/";

  const addCart = [];

  return (
    <div className="font-poppins bg-white justify-between text-gray-900 overflow-x-hidden">
      <motion.div
        className={`fixed top-0 left-0 w-full h-22 z-50 transition-colors duration-500 ${
          isScroll ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto relative px-4 sm:px-6 py-2 sm:py-3 flex justify-center items-center">
          {/* Logo */}
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

          {/* Right Side Icons */}
          <div className="absolute right-4 sm:right-6 top-2 sm:top-6 flex gap-3 sm:gap-6 text-gray-700">
            {/* Cart */}
            <div className="relative flex items-center">
              <Link
                to="/Cart"
                className="hover:text-red-700 transition-all duration-300 border-b-2 border-transparent hover:border-red-700"
              >
                <FiShoppingBag className="text-2xl" />
                {addCart.length > 0 && (
                  <span className="absolute -top-2 -right-2 h-5 w-5 bg-green-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {addCart.length}
                  </span>
                )}
              </Link>
            </div>

            {/* Profile */}
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="hover:text-red-700 transition-all duration-300 border-b-2 border-transparent hover:border-red-700"
            >
              <FiUser className="text-2xl" />
            </button>

            {/* Profile Dropdown */}
            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  className="absolute right-6 top-14 bg-white shadow-lg rounded-md w-56 h-100 z-50 font-poppins"
                >
                  {[
                    { to: "/signin", text: "SIGN IN" },
                    { to: "/orders", text: "MY ORDERS" },
                    { to: "/account", text: "ACCOUNT SETTINGS" },
                    { to: "/address", text: "ADDRESS BOOK" },
                    { to: "/wallet", text: "WALLET" },
                    { to: "/saved", text: "SAVED ITEMS" },
                    { to: "/appointments", text: "MY APPOINTMENTS" },
                  ].map((item, i) => (
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

            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hover:text-red-700 transition-all duration-300 border-b-2 border-transparent hover:border-red-700"
            >
              <IoIosSearch className="text-2xl" />
            </button>

            {/* Fullscreen Search */}
           

            {/* Menu */}
            <div>
              <button
                onClick={() => setisOpen(!isOpen)}
                className="hover:text-red-700 transition-all duration-300 border-b-2 border-transparent hover:border-red-700"
              >
                <MdMenu className="text-2xl" />
              </button>

              <div
                className={`fixed top-0 right-0 h-full w-[400px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
                  isOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="absolute top-4 right-4 flex items-center p-4">
                  <button
                    onClick={() => setisOpen(false)}
                    className="rounded-full py-3 px-3 focus:outline-none bg-black text-white"
                  >
                    <IoCloseSharp size={24} />
                  </button>
                </div>
                <nav className="mt-10 flex flex-col p-4 space-y-4 font-poppins">
                  {/* Add your menu links here */}
                </nav>
              </div>

              {isOpen && (
                <div
                  className="fixed inset-0 bg-black/50 z-40"
                  onClick={() => setisOpen(false)}
                ></div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Navbar;
