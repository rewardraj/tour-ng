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
  gap?: FlexGap | string;
  align?: AlignItems;
  width?: number | string;
  wrap?: FlexWrap;
  margin?: string;
  children?: React.ReactNode;
  zIndex?: number;
  className?: string;
  onClick?: () => void;
  flex?: number;
}

export const Flex: FC<FlexProps> = ({
  direction = FlexDirection.ROW,
  justify = JustifyContent.START,
  gap = 0,
  align = AlignItems.CENTER,
  margin = "0",
  zIndex = 0,
  flex,
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
    flex,
  };

  return (
    <div
      style={{ ...baseStyle, zIndex, flex }}
      className={`${styles.Flex} ${className}`}
    >
      {children}
    </div>
  );
};
