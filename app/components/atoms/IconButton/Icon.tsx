import React from "react";
import { Size } from "@shared/Sizes/Sizes";
import { TextColorVariant } from "@shared/Variants/variants";
import styles from "./Icon.module.scss";

interface IconProps {
  icon?: string;
  size?: Size;
  color?: TextColorVariant;
  hoverColor?: TextColorVariant;
  onClick?: () => void;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  icon = "",
  size = Size.SMALL,
  color = TextColorVariant.PRIMARY,
  hoverColor = color,
  onClick = () => {},
}) => {
  const hoverStyle = `${hoverColor}Hover`;

  return (
    <button
      title="icon"
      type="button"
      className={`${styles.Icon} ${styles[`Icon--${size}`]} ${
        styles[`Icon--${color}`]
      } ${styles[`Icon--${hoverStyle}`]} dripicons dripicons-${icon}`}
      onClick={onClick}
      tabIndex={0}
    />
  );
};
export default Icon;
