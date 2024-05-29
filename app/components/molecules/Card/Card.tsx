import { Flex } from "@app/components/layouts/Flex/Flex";
import {
  AlignItems,
  FlexDirection,
  FlexGap,
  JustifyContent,
} from "@app/shared/Layout/Layout";
import React from "react";
import styles from "./Card.module.scss";

interface CardProps {
  days?: string;
  stars?: number;
  src?: string;
  alt?: string;
  location?: string;
  price?: number;
  icon?: string;
}

const Card: React.FC<CardProps> = ({
  days,
  stars,
  src,
  alt,
  location,
  icon,
  price,
}) => {
  return (
    <Flex
      direction={FlexDirection.COLUMN}
      justify={JustifyContent.SPACE_BETWEEN}
      className={styles.Card}
    >
      <img src={src} alt={alt} />
      <Flex
        direction={FlexDirection.COLUMN}
        justify={JustifyContent.SPACE_BETWEEN}
        className={styles.content}
      >
        <Flex
          justify={JustifyContent.SPACE_BETWEEN}
          className={styles.topGroup}
          width="100%"
        >
          <span>{days}</span>
          <Flex
            justify={JustifyContent.CENTER}
            align={AlignItems.CENTER}
            gap={FlexGap.MEDIUM}
            className={styles.stars}
          >
            <i className={icon} style={{ color: "gold" }}></i>
            {stars}
          </Flex>
        </Flex>
        <Flex
          justify={JustifyContent.SPACE_BETWEEN}
          className={styles.bottomGroup}
          width="100%"
          align={AlignItems.STRETCH}
        >
          <span className={styles.glassEffect}>{location}</span>
          <span className={styles.glassEffect}>{price}</span>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Card;
