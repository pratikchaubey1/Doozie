// src/components/Navbar/Navbar.jsx
import React, { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext/ProductContext";
import { motion } from "framer-motion";

import Logo from "./Logo";
import CartIcon from "./CartIcon";
import ProfileMenu from "./ProfileMenu";
import SearchButton from "./SearchButton";
import MenuDrawer from "./MenuDrawer";

const Navbar = () => {
  const {
    isScroll,
    isOpen,
    setisOpen,
    setIsSearchOpen,
    profileOpen,
    setProfileOpen,
  } = useContext(ProductContext);

  const addCart = []; // 👈 यहाँ बाद में अपना cart state connect करना

  return (
    <div className="font-poppins bg-white justify-between text-gray-900 overflow-x-hidden">
      <motion.div
        className={`fixed top-0 left-0 w-full h-22 z-50 transition-colors duration-500 ${
          isScroll ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto relative px-4 sm:px-6 py-2 sm:py-3 flex justify-center items-center">
          {/* ✅ Logo (context से values लेता है, props की जरूरत नहीं) */}
          <Logo />

          {/* ✅ Right side icons */}
          <div className="absolute right-4 sm:right-6 top-2 sm:top-6 flex gap-3 sm:gap-6 text-gray-700">
            {/* Cart */}
            <CartIcon cartItems={addCart} />

            {/* Profile */}
            <ProfileMenu
              profileOpen={profileOpen}
              setProfileOpen={setProfileOpen}
            />

            {/* Search */}
            <SearchButton setIsSearchOpen={setIsSearchOpen} />

            {/* Menu Drawer */}
            <MenuDrawer isOpen={isOpen} setisOpen={setisOpen} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
