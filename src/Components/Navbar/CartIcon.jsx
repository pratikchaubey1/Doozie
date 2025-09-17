import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

const CartIcon = ({ cartItems }) => {
  return (
    <div className="relative flex items-center">
      <Link
        to="/Cart"
        className="hover:text-red-700 transition-all duration-300 border-b-2 border-transparent hover:border-red-700"
      >
        <FiShoppingBag className="text-2xl" />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 h-5 w-5 bg-green-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartIcon;
