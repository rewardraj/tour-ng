import { FC, ReactNode } from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <section className={`${styles.Container} ${className}`}>{children}</section>
  );
};

export default Container;
