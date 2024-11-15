import { Flex } from "@app/components/layouts/Flex/Flex";
import { FlexDirection, JustifyContent } from "@app/shared/Layout/Layout";
import { FC } from "react";
import styles from "./ActivityCard.module.scss";

interface CardProps {
  days?: string;
  stars?: number;
  src?: string;
  alt?: string;
  location?: string;
  price?: number;
  icon?: string;
}

const Card: FC<CardProps> = ({ src, alt, location }) => {
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
        <span>{location}</span>
      </Flex>
    </Flex>
  );
};

export default Card;
