import { ActivityTypes } from "@app/shared/data/allData";
import styles from "./ActivityCard.module.scss";

interface ActivityCardProps {
  activity: ActivityTypes;
  onClick: (activity: ActivityTypes) => void;
}

const ActivityCard = ({ activity, onClick }: ActivityCardProps) => {
  return (
    <div className={styles.card} onClick={() => onClick(activity)}>
      <div className={styles.imageContainer}>
        <img src={activity.image} alt={activity.name} />
        <span className={styles.category}>{activity.category}</span>
      </div>
      <div className={styles.content}>
        <h3>{activity.name}</h3>
        <p className={styles.location}>{activity.city}</p>
        <p className={styles.description}>{activity.description}</p>
        <div className={styles.details}>
          <span>{activity.duration}</span>
          <span>{activity.price}</span>
          <span>★ {activity.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
