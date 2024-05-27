import React, { CSSProperties, FC, useEffect, useState } from "react";
import { ScreenSize } from "@shared/Screen/Screen";

interface ColumnsProps {
  desktop?: number;
  tablet?: number;
  mobile?: number;
  mobileSpan?: number;
  span?: number;
  order?: number;
  maxheight?: number;
  size?: ScreenSize;
  children?: React.ReactNode;
}

export const Columns: FC<ColumnsProps> = ({
  desktop = 12,
  tablet = 6,
  mobile = 2,
  mobileSpan,
  span,
  order,
  maxheight,
  size = ScreenSize.DESKTOP,
  children,
}) => {
  const [currentSize, setCurrentSize] = useState(size);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCurrentSize(ScreenSize.MOBILE);
      } else if (window.innerWidth <= 1024) {
        setCurrentSize(ScreenSize.TABLET);
      } else {
        setCurrentSize(ScreenSize.DESKTOP);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (span) {
    desktop = tablet = mobile = span;
  }

  const getSpan = (size: ScreenSize) => {
    if (size === ScreenSize.DESKTOP) return Math.max(desktop, 2);
    if (size === ScreenSize.TABLET) return Math.max(tablet, 2);
    if (size === ScreenSize.MOBILE) return mobileSpan || Math.max(mobile, 1);
  };

  const style: CSSProperties = {
    order: order,
    gridColumn: `span ${getSpan(currentSize)}`,
    maxHeight: `${maxheight}rem`,
    width: `@media screen and (max-width: 768px) {
      width: 100%
    }`,
  };

  return <div style={style}>{children}</div>;
};
