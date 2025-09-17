import React, { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";
import { useLogoTransforms } from "./useLogoTransforms";
import {
  dropdownVariants,
  overlayVariants,
  inputVariants,
  listItemVariants,
} from "./animations";

const ProductProvider = ({ children }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [all, setall] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { logoSize, logoY, logoX } = useLogoTransforms();

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [Sceekers, setSceekers] = useState([]);
  const [bag, setbag] = useState([]);
  const [jens, setjens] = useState([]);
  const [shirt, setshirts] = useState([]);

  useEffect(() => {
    const maxLength = Math.max(
      Sceekers.length,
      jens.length,
      shirt.length,
      bag.length
    );
    const mixed = [];
    for (let i = 0; i < maxLength; i++) {
      if (Sceekers[i]) mixed.push({ ...Sceekers[i], type: "sneaker" });
      if (jens[i]) mixed.push({ ...jens[i], type: "jeans" });
      if (shirt[i]) mixed.push({ ...shirt[i], type: "shirt" });
      if (bag[i]) mixed.push({ ...bag[i], type: "bag" });
    }
    setall(mixed);
  }, [Sceekers, jens, shirt, bag]);

  const filteredProducts = all.filter((item) =>
    item.Name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const value = {
    isScroll,
    setIsScroll,
    logoSize,
    logoY,
    logoX,
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
    Sceekers,
    setSceekers,
    bag,
    setbag,
    jens,
    setjens,
    shirt,
    setshirts,
    scrolled,
    setScrolled,
    all,
    setall,
    searchTerm,
    setSearchTerm,
    filteredProducts,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
