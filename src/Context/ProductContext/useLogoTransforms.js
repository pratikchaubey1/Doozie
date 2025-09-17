import { useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export const useLogoTransforms = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const { scrollY } = useScroll();

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

  return { logoSize, logoY, logoX, isDesktop };
};
