import React from "react";
import styles from "./ArrowButton.module.scss";

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
  ariaLabel: string;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction,
  onClick,
  disabled,
  ariaLabel,
}) => (
  <button
    className={styles.button}
    onClick={onClick}
    disabled={disabled}
    aria-label={ariaLabel}
    role="button"
  >
    <i className={`dripicons dripicons-arrow-thin-${direction}`} />
  </button>
);
