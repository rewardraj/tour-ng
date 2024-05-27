import React, { FC } from "react";
import {
  AlignItems,
  FlexDirection,
  FlexGap,
  FlexWrap,
  JustifyContent,
} from "@shared/Layout/Layout";
import styles from "./Flex.module.scss";

interface FlexProps {
  direction?: FlexDirection;
  justify?: JustifyContent;
  gap?: FlexGap;
  align?: AlignItems;
  width?: number | string;
  wrap?: FlexWrap;
  margin?: string;
  children?: React.ReactNode;
  zIndex?: number;
  className?: string;
}

export const Flex: FC<FlexProps> = ({
  direction = FlexDirection.ROW,
  justify = JustifyContent.START,
  gap = 0,
  align = AlignItems.CENTER,
  margin = "0",
  zIndex = 0,
  width,
  children,
  className,
}) => {
  const baseStyle = {
    flexDirection: direction,
    justifyContent: justify,
    gap: gap,
    alignItems: align,
    width,
    margin: margin,
    flexWrap: FlexWrap.WRAP,
  };

  return (
    <div
      style={{ ...baseStyle, zIndex }}
      className={`${styles.Flex} ${className}`}
    >
      {children}
    </div>
  );
};
