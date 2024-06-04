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
  disabled?: boolean;
}

const Icon: React.FC<IconProps> = ({
  icon = "",
  size = Size.SMALL,
  color = TextColorVariant.PRIMARY,
  hoverColor = color,
  onClick = () => {},
  disabled = false,
}) => {
  const colorStyle = disabled ? "Disabled" : color;
  const hoverStyle = disabled ? "Disabled" : hoverColor;

  return (
    <button
      title="icon"
      type="button"
      className={`${styles.Icon} ${styles[`Icon--${size}`]} ${
        styles[`Icon--${colorStyle}`]
      } ${styles[`Icon--${hoverStyle}Hover`]} dripicons dripicons-${icon}`}
      onClick={onClick}
      tabIndex={0}
      disabled={disabled}
    />
  );
};
export default Icon;
