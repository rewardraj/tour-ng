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
  role?: string;
  tabIndex?: number;
  onKeyPress?: any;
}

export const Flex: FC<FlexProps> = ({
  direction = FlexDirection.ROW,
  justify = JustifyContent.START,
  gap = 0,
  align = AlignItems.CENTER,
  margin,
  zIndex = 0,
  role,
  flex,
  width,
  tabIndex,
  onClick,
  onKeyPress,
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
      role={role}
      tabIndex={tabIndex}
      onClick={onClick} // Ensure this is here
      onKeyPress={onKeyPress} // Ensure this is here
    >
      {children}
    </div>
  );
};
