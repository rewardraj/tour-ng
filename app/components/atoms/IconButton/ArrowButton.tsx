import { FC } from "react";
import styles from "./ArrowButton.module.scss";

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
  ariaLabel: string;
  backgroundColor?: string;
  color?: string;
  margin?: string;
  className?: string;
}

export const ArrowButton: FC<ArrowButtonProps> = ({
  direction,
  onClick,
  disabled,
  ariaLabel,
  color = "var(--color-text-primary)",
  backgroundColor = "var(--color-background-light)",
  margin,
  className,
}) => (
  <button
    className={`${styles.button} ${className}`}
    onClick={onClick}
    disabled={disabled}
    aria-label={ariaLabel}
    style={{ backgroundColor: backgroundColor, color: color, margin: margin }}
    role="button"
  >
    <i className={`dripicons dripicons-arrow-thin-${direction}`} />
  </button>
);
