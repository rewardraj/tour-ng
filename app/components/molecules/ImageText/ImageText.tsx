import React from "react";
import styles from "./ImageText.module.scss";
import { Flex } from "@app/components/layouts/Flex/Flex";
import { AlignItems, FlexDirection } from "@app/shared/Layout/Layout";

interface ImageTextProps {
  src: string;
  alt?: string;
  text?: string;
  subtext?: string;
}

const ImageText: React.FC<ImageTextProps> = ({ src, alt, text, subtext }) => {
  return (
    <Flex direction={FlexDirection.COLUMN} className={styles.ImageText}>
      <>
        <img src={src} alt={alt} className={styles.Image} />
      </>
      <Flex
        direction={FlexDirection.COLUMN}
        gap={8}
        className={styles.TextMain}
        align={AlignItems.START}
      >
        <span>{text}</span>
        <span>{subtext}</span>
      </Flex>
    </Flex>
  );
};

export default ImageText;
