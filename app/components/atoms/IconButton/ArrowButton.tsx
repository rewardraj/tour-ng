import React from "react";
import styles from "./ArrowButton.module.scss";

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
  ariaLabel: string;
  backgroundColor?: string;
  color?: string;
  margin?: string;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction,
  onClick,
  disabled,
  ariaLabel,
  color,
  backgroundColor,
  margin,
}) => (
  <button
    className={styles.button}
    onClick={onClick}
    disabled={disabled}
    aria-label={ariaLabel}
    style={{ backgroundColor: backgroundColor, color: color, margin: margin }}
    role="button"
  >
    <i className={`dripicons dripicons-arrow-thin-${direction}`} />
  </button>
);
