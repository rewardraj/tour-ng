import styles from "./ActivityModal.module.scss";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { ActivityTypes } from "@app/shared/types/types";

interface ActivityModalProps {
  activity: ActivityTypes;
  onClose: () => void;
}

const ActivityModal = ({ activity, onClose }: ActivityModalProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <IoClose />
        </button>

        <div className={styles.content}>
          <div className={styles.imageSection}>
            <img
              src={activity.images?.[selectedImageIndex] || activity.image}
              alt={activity.name}
              className={styles.mainImage}
            />
            <div className={styles.thumbnails}>
              {(activity.images || [activity.image]).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${activity.name} ${index + 1}`}
                  className={`${styles.thumbnail} ${
                    selectedImageIndex === index ? styles.selected : ""
                  }`}
                  onClick={() => setSelectedImageIndex(index)}
                />
              ))}
            </div>
          </div>

          <div className={styles.details}>
            <h2>{activity.name}</h2>
            <p className={styles.location}>{activity.city}</p>
            <div className={styles.info}>
              <span>{activity.duration}</span>
              <span>{activity.price}</span>
              <span>★ {activity.rating}</span>
            </div>
            <p className={styles.description}>{activity.detailedDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityModal;
