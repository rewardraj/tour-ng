import React, { CSSProperties, FC } from "react";
import { ScreenSize } from "@shared/Screen/Screen";

interface ColumnsProps {
  desktop?: number;
  tablet?: number;
  mobile?: number;
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
  span,
  order,
  maxheight,
  size = ScreenSize.DESKTOP,
  children,
}) => {
  if (span) {
    desktop = tablet = mobile = span;
  }

  const getSpan = (size: ScreenSize) => {
    if (size === ScreenSize.DESKTOP) return Math.max(desktop, 2);
    if (size === ScreenSize.TABLET) return Math.max(tablet, 2);
    if (size === ScreenSize.MOBILE) return Math.max(mobile, 1);
  };

  const style: CSSProperties = {
    order: order,
    gridColumn: `span ${getSpan(size)}`,
    maxHeight: `${maxheight}rem`,
  };

  return (
    <div className="Col" style={style}>
      {children}
    </div>
  );
};
