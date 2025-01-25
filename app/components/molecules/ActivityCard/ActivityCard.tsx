import { Flex } from "@app/components/layouts/Flex/Flex";
import { FlexDirection, JustifyContent } from "@app/shared/Layout/Layout";
import { FC } from "react";
import styles from "./ActivityCard.module.scss";
import { ActivityTypes } from "@app/shared/data/allData";

interface CardProps {
  days?: string;
  stars?: number;
  src?: string;
  alt?: string;
  location?: string;
  price?: number;
  icon?: string;
  activity?: ActivityTypes; // Make 'activity' optional
  onClick?: (activity: ActivityTypes) => void; // Make 'onClick' optional
}

const Card: FC<CardProps> = ({ src, alt, location, activity, onClick }) => {
  const handleClick = () => {
    if (onClick && activity) {
      onClick(activity);
    }
  };

  return (
    <Flex
      direction={FlexDirection.COLUMN}
      justify={JustifyContent.SPACE_BETWEEN}
      className={styles.Card}
      onClick={handleClick}
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
