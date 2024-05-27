import React from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <section className={`${styles.Container} ${className}`}>{children}</section>
  );
};

export default Container;
