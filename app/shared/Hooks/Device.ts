import { useState, useEffect } from "react";
import { ScreenSize } from "@shared/Screen/Screen";

const useScreenSize = () => {
  const [size, setSize] = useState(getScreenSize());

  useEffect(() => {
    const handleResize = () => {
      setSize(getScreenSize());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};

export const getScreenSize = (): ScreenSize => {
  const match = (media: string) =>
    window.matchMedia ? window.matchMedia(media).matches : false;

  if (match("(max-width: 600px)")) {
    return ScreenSize.MOBILE;
  }
  if (match("(min-width: 600px) and (max-width: 1024px)")) {
    return ScreenSize.TABLET;
  }
  return ScreenSize.DESKTOP;
};

export default useScreenSize;
