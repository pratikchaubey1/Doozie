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
     const [him ,sethim] = useState( [
  { id: 1, Name: "Flower keychain", Price: 100, Img: "https://i.pinimg.com/1200x/be/f1/d9/bef1d930a813731e93e8580896dfd218.jpg" },
  { id: 2, Name: "Kitty Keychain", Price: 120, Img: "https://i.pinimg.com/736x/4c/b1/ba/4cb1ba06f04cd3a84a53d859508198e3.jpg" },
  { id: 3, Name: "Rings", Price: 250, Img: "https://i.pinimg.com/736x/54/37/7d/54377dd9c8968a79302c1c034a956899.jpg" },
  { id: 4, Name: "Silver ring", Price: 300, Img: "https://i.pinimg.com/1200x/1f/0e/7e/1f0e7e403c0a85b709b20b4d6cedcd89.jpg" },
  { id: 5, Name: "Watch", Price: 500, Img: "https://i.pinimg.com/736x/a9/ed/fe/a9edfe6e663cd6b1cf6ef24ee900fd1b.jpg" },
  { id: 6, Name: "Spider watch", Price: 550, Img: "https://i.pinimg.com/736x/be/99/ca/be99ca72a0228f464e62c3daa28f9160.jpg" },
  { id: 7, Name: "Spider Chain", Price: 400, Img: "https://i.pinimg.com/736x/62/e9/89/62e98969a6b1793b69d3ecb273d746b0.jpg" },
  { id: 8, Name: "h1 chain", Price: 350, Img: "https://i.pinimg.com/736x/49/ba/f3/49baf3b1efd998efa3d0765f7d0392fc.jpg" },
  { id: 9, Name: "Toreto", Price: 600, Img: "https://i.pinimg.com/1200x/32/ce/07/32ce07c8e9d63e52c58a6741bd346e9d.jpg" },
  { id: 10, Name: "Rare Hot", Price: 750, Img: "https://i.pinimg.com/1200x/86/99/3a/86993ac0718dcb51413b19a7025c3d1a.jpg" },
  { id: 11, Name: "Hoddy", Price: 1200, Img: "https://i.pinimg.com/1200x/ef/a9/89/efa989885e77e1789685219262b7df14.jpg" },
  { id: 12, Name: "Tye", Price: 150, Img: "https://i.pinimg.com/736x/65/1b/8f/651b8f40a0ca5090d766247c3f9b91d1.jpg" },
  { id: 13, Name: "Bag", Price: 800, Img: "https://i.pinimg.com/736x/23/05/bd/2305bd21f5c73b6552ca7ced0c24994c.jpg" },
  { id: 14, Name: "Roblox", Price: 300, Img: "https://i.pinimg.com/736x/4a/c5/af/4ac5af121e48b141ef28fbd3e353f2b5.jpg" },
  { id: 15, Name: "lelo cross", Price: 450, Img: "https://i.pinimg.com/736x/4b/22/1c/4b221cafa05319ea932a82818569fe3a.jpg" },
  { id: 16, Name: "mask", Price: 200, Img: "https://i.pinimg.com/736x/e1/5b/ad/e15badb6199afb59af2ae4e632999ab9.jpg" },
  { id: 17, Name: "Gucci", Price: 5000, Img: "https://i.pinimg.com/736x/57/87/13/5787131032b766bbd997e519d159d254.jpg" },
  { id: 18, Name: "parfume", Price: 1800, Img: "https://i.pinimg.com/1200x/1a/fe/1f/1afe1fa392d24d8da52a7604abfbeb5e.jpg" },
  { id: 19, Name: "Tizoo", Price: 2200, Img: "https://i.pinimg.com/736x/6b/f2/b4/6bf2b47ccac766142f13ad901a872fa6.jpg" },
  { id: 29, Name: "Narngi", Price: 900, Img: "https://i.pinimg.com/736x/c1/8c/cf/c18ccff869a94d67edd7f1a35304b4e2.jpg" },
]);

const [her , sether]   = useState ( [
  { id: 1, Name: "Sun Moon Bracelets", Price: 299, Img: "https://i.pinimg.com/736x/95/02/f5/9502f5fc3998cb7735b09db8f8ee4cd0.jpg" },
  { id: 2, Name: "Bracelets", Price: 199, Img: "https://i.pinimg.com/1200x/f1/9b/bc/f19bbc8d1599598ca5e087ad13995bd5.jpg" },
  { id: 3, Name: "Chin", Price: 399, Img: "https://i.pinimg.com/1200x/8b/a1/5d/8ba15d9f026ffdaea2dbc6542eef7310.jpg" },
  { id: 4, Name: "World Chin", Price: 499, Img: "https://i.pinimg.com/736x/20/ce/98/20ce98120033eacbce5e95440714e029.jpg" },
  { id: 5, Name: "Hoodie", Price: 999, Img: "https://i.pinimg.com/1200x/b2/53/2d/b2532d48589376477bc38987f35b7aff.jpg" },
  { id: 6, Name: "Baby Name Necklace", Price: 699, Img: "https://i.pinimg.com/736x/a8/e8/e3/a8e8e37d94f77081423b2cc2b0f15d7a.jpg" },
  { id: 7, Name: "Keko Hoodie", Price: 899, Img: "https://i.pinimg.com/1200x/0a/06/af/0a06af730635434d00a4fbab0af324e1.jpg" },
  { id: 8, Name: "Las Vik", Price: 499, Img: "https://i.pinimg.com/1200x/24/f0/53/24f0530ead71d93b69732b6fb86b724e.jpg" },
  { id: 9, Name: "Adidas Spezial", Price: 1299, Img: "https://i.pinimg.com/736x/b8/4d/8b/b84d8b0b25069683e162a315c5ffcaf5.jpg" },
  { id: 10, Name: "Adidas New", Price: 1399, Img: "https://i.pinimg.com/736x/3d/84/6d/3d846db1095ec4bc026b1c7492153949.jpg" },
  { id: 11, Name: "Adidas Meme", Price: 1199, Img: "https://i.pinimg.com/1200x/6f/d2/2a/6fd22a0324a9cffab4af99137d1eecfb.jpg" },
  { id: 12, Name: "Stylish Bag", Price: 799, Img: "https://i.pinimg.com/1200x/f7/d9/ba/f7d9ba1f058905bbaae31aeaac55eb6f.jpg" },
  { id: 13, Name: "Bunch Teddy", Price: 299, Img: "https://i.pinimg.com/736x/52/3e/4c/523e4c7a9f087b1261b17826e4a6d6c5.jpg" },
  { id: 14, Name: "Dragon Keychains", Price: 199, Img: "https://i.pinimg.com/736x/39/d1/b7/39d1b79cef476fa967393c2fef1ecabb.jpg" },
  { id: 15, Name: "Bunu Nereden", Price: 399, Img: "https://i.pinimg.com/736x/c3/77/ba/c377ba247e7b6703bfa8708ec59ccd9e.jpg" },
  { id: 16, Name: "Lovvy", Price: 599, Img: "https://i.pinimg.com/736x/bc/da/d0/bcdad0879a8c0de615648d9d950b92e3.jpg" },
  { id: 17, Name: "The Bee Miraculous", Price: 699, Img: "https://i.pinimg.com/736x/55/ce/47/55ce47fcc9fe34f70813fbbb6f07a680.jpg" },
  { id: 18, Name: "Gucci Top", Price: 1499, Img: "https://i.pinimg.com/736x/28/5c/93/285c93ff0ada0884b5a7d00ac29a1318.jpg" },
  { id: 19, Name: "Anastasia Bag", Price: 999, Img: "https://i.pinimg.com/1200x/09/c2/29/09c229d3ef1a5675b5005da3b574a464.jpg" },
  { id: 20, Name: "Flower Knows", Price: 399, Img: "https://i.pinimg.com/736x/13/0f/d0/130fd06ea4f37662246c7fd14893708f.jpg" },
]);

  const [kid, setKid] = useState([
  { Id: 1, Name: "Building Blocks", Price: 25, Img: "https://i.pinimg.com/1200x/45/96/ca/4596cadde7245727456fed8b4ebd75c2.jpg" },
  { Id: 2, Name: "Toy Car", Price: 15, Img: "https://i.pinimg.com/736x/18/bf/ed/18bfed0d2bb925c0c47197e451b17164.jpg" },
  { Id: 3, Name: "Dinosaur Toy", Price: 20, Img: "https://i.pinimg.com/736x/83/bb/da/83bbda227829e9dea00c3f04244339d8.jpg" },
  { Id: 4, Name: "Panda Lego", Price: 30, Img: "https://i.pinimg.com/736x/66/40/67/664067651032451f21c2e3e539ccf930.jpg" },
  { Id: 5, Name: "Lilo Doll", Price: 18, Img: "https://i.pinimg.com/736x/66/7b/57/667b5739c102b197201f7922d0c9e234.jpg" },
  { Id: 6, Name: "Puzzle Toy", Price: 22, Img: "https://i.pinimg.com/1200x/39/2a/15/392a15a6a1485b368b177488f3d2d755.jpg" },
  { Id: 7, Name: "Robot Toy", Price: 28, Img: "https://i.pinimg.com/736x/e6/33/e7/e633e70bd16369aa1bcf25a50a83033c.jpg" },
  { Id: 8, Name: "Animal Figures", Price: 16, Img: "https://i.pinimg.com/736x/08/13/ea/0813ea79f07d8a6a5b2bc441b2630772.jpg" },
  { Id: 9, Name: "Ball Set", Price: 12, Img: "https://i.pinimg.com/1200x/f7/d0/e9/f7d0e9b83eda3f3ee0eb6c75abc40e9e.jpg" },
  { Id: 10, Name: "Stuffed Bear", Price: 20, Img: "https://i.pinimg.com/736x/0c/73/b0/0c73b062f5bc1a6a3bf7623662cf988f.jpg" },
  { Id: 11, Name: "Mini Train", Price: 25, Img: "https://i.pinimg.com/736x/04/16/2e/04162e7a67d4f1b4806d70b88218f098.jpg" },
  { Id: 12, Name: "Kitchen Set", Price: 30, Img: "https://i.pinimg.com/736x/94/2c/ba/942cbabb947e04946e4c0decad3e6d3a.jpg" },
  { Id: 13, Name: "Toy Plane", Price: 18, Img: "https://i.pinimg.com/1200x/1d/54/3f/1d543f8985f8dee5aa326837785c867d.jpg" },
  { Id: 14, Name: "Magic Blocks", Price: 22, Img: "https://i.pinimg.com/1200x/82/bd/b7/82bdb704fe488d1efa3c806cc19f2f62.jpg" },
  { Id: 15, Name: "Mini Scooter", Price: 35, Img: "https://i.pinimg.com/736x/09/59/89/095989db6e58f9c4377acf2aea0c4f6c.jpg" },
  { Id: 16, Name: "Animal Puzzle", Price: 20, Img: "https://i.pinimg.com/736x/51/df/24/51df2451ec36da886c1c4fb6a8c7393e.jpg" },
  { Id: 17, Name: "Race Car Set", Price: 28, Img: "https://i.pinimg.com/1200x/cc/21/eb/cc21eb9b08ef400f6e76a8ddcea25363.jpg" },
  { Id: 18, Name: "Story Book", Price: 15, Img: "https://i.pinimg.com/1200x/6e/1e/1d/6e1e1d264565e48c2526d9d0f2edfb37.jpg" },
  { Id: 19, Name: "Teddy Bear", Price: 20, Img: "https://i.pinimg.com/1200x/87/42/27/874227d0b75c911248694faf60519cb5.jpg" },
  { Id: 20, Name: "Art Set", Price: 25, Img: "https://i.pinimg.com/736x/d4/f0/97/d4f097ae9c082bd8eb86f086c0c7d839.jpg" },
]);


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
    him ,sethim,
    her , sether,
    kid, setKid,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
