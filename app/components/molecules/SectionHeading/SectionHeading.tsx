import { Flex } from "@app/components/layouts/Flex/Flex";
import { AlignItems, FlexDirection, FlexGap } from "@app/shared/Layout/Layout";
import { MaxSize } from "@app/shared/Sizes/Sizes";
import styles from "./Heading.module.scss";
import React from "react";

interface SectionHeadingProps {
  preText: string;
  mainText: string;
  description?: string;
  isDescription?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  preText,
  mainText,
  description,
  isDescription = description ? true : false,
}) => {
  return (
    <>
      <Flex
        className={styles.Heading__Intro}
        direction={FlexDirection.COLUMN}
        align={AlignItems.START}
        gap={FlexGap.SMALL}
        width={MaxSize.DEFAULT}
      >
        <span className={styles.pre}>{preText}</span>
        <span
          className={styles.Heading__Text}
          style={{ maxHeight: isDescription ? "auto" : "0" }}
        >
          {mainText}
        </span>
      </Flex>
      <article className={styles.Heading__Description}>
        <span>{description}</span>
      </article>
    </>
  );
};

export default SectionHeading;
