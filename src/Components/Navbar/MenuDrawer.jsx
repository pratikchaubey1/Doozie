import React from "react";
import { MdMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

const MenuDrawer = ({ isOpen, setisOpen }) => {
  return (
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
          {/* Menu links */}
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setisOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default MenuDrawer;
