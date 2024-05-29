import React from "react";
import styles from "./ImageText.module.scss";
import { Flex } from "@app/components/layouts/Flex/Flex";
import {
  AlignItems,
  FlexDirection,
  JustifyContent,
} from "@app/shared/Layout/Layout";

interface ImageTextProps {
  src: string;
  height?: string;
  width?: string;
  maxWidth?: string;
  alt?: string;
  text?: string;
  subtext?: string;
  className?: string;
}

const ImageText: React.FC<ImageTextProps> = ({
  src,
  alt,
  text,
  subtext,
  height,
  width,
  maxWidth,
}) => {
  return (
    <Flex direction={FlexDirection.COLUMN} className={styles.ImageText}>
      <>
        <img
          src={src}
          alt={alt}
          style={{ height: height, width: width, maxWidth: maxWidth }}
          className={`${styles.Image} {className}`}
        />
      </>
      <Flex
        direction={FlexDirection.COLUMN}
        gap={8}
        justify={JustifyContent.START}
        className={styles.TextMain}
        align={AlignItems.START}
      >
        <span>{text}</span>
        <span className={styles.subText}>{subtext}</span>
      </Flex>
    </Flex>
  );
};

export default ImageText;
