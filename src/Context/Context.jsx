import { useScroll, useTransform } from "framer-motion";
import React, { createContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [all, setall] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const { scrollY } = useScroll();

  // Logo size & position
  const logoSize = useTransform(
    scrollY,
    [0, 200],
    isDesktop ? ["10vw", "5vw"] : ["16vw", "8vw"]
  );

  const logoY = useTransform(
    scrollY,
    [0, 200],
    isDesktop ? ["0vh", "-8vh"] : ["0vh", "-6vh"]
  );

  const logoX = useTransform(
    scrollY,
    [0, 200],
    ["0vw", isDesktop ? "0vw" : "-18vw"]
  );

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dropdown animation
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2 } },
  };

  // Search animation
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  const filteredProducts = all.filter((item) =>
    item.Name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Empty arrays for now
  const [Sceekers, setSceekers] = useState([]);
  const [bag, setbag] = useState([]);
  const [jens, setjens] = useState([]);
  const [shirt, setshirts] = useState([]);

  useEffect(() => {
    // Mix arrays (currently empty)
    const maxLength = Math.max(Sceekers.length, jens.length, shirt.length, bag.length);
    const mixed = [];
    for (let i = 0; i < maxLength; i++) {
      if (Sceekers[i]) mixed.push({ ...Sceekers[i], type: "sneaker" });
      if (jens[i]) mixed.push({ ...jens[i], type: "jeans" });
      if (shirt[i]) mixed.push({ ...shirt[i], type: "shirt" });
      if (bag[i]) mixed.push({ ...bag[i], type: "bag" });
    }
    setall(mixed);
  }, [Sceekers, jens, shirt, bag]);

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
