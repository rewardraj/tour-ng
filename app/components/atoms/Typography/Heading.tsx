import { FC, HTMLAttributes } from "react";
import { TextColorVariant } from "@shared/Variants/variants";
import { Headings, TextWeight } from "./Typography";
import { TextAlign } from "@shared/Layout/Layout";
import React from "react";
import styles from "./Heading.module.scss";

interface HeadingProps extends HTMLAttributes<HTMLElement> {
  weight?: TextWeight;
  color?: TextColorVariant;
  type?: Headings;
  align?: TextAlign.CENTER;
}

export const Heading: FC<HeadingProps> = ({
  weight = TextWeight.BOLDER,
  color = TextColorVariant.PRIMARY,
  type = Headings.H1,
  align = TextAlign.CENTER,
  children,
  ...props
}) => {
  const Tag = type as keyof JSX.IntrinsicElements;

  const className = `${styles.Heading} ${styles[`Heading--${color}`]} ${
    styles[`Heading--${weight}`]
  } ${styles[`Heading--${align}`]}`;

  return React.createElement(Tag, { className, ...props }, children);
};

export default Heading;
