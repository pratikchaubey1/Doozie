import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchButton = ({ setIsSearchOpen }) => {
  return (
    <button
      onClick={() => setIsSearchOpen(true)}
      className="hover:text-red-700 transition-all duration-300 border-b-2 border-transparent hover:border-red-700"
    >
      <IoIosSearch className="text-2xl" />
    </button>
  );
};

export default SearchButton;
