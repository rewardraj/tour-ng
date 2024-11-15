import { FC } from "react";
import styles from "./AttractionModal.module.scss";
import { TouristAttraction } from "@app/pages/Destination/types";
import { ArrowButton } from "@app/components/atoms/IconButton/ArrowButton";
import { useState } from "react";
import { Flex } from "@app/components/layouts/Flex/Flex";
import {
  AlignItems,
  FlexDirection,
  FlexGap,
  JustifyContent,
} from "@app/shared/Layout/Layout";

interface AttractionModalProps {
  attraction: TouristAttraction;
  onClose: () => void;
}

const AttractionModal: FC<AttractionModalProps> = ({ attraction, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock images array - in production this would come from your API/data
  const images = [
    { url: "https://picsum.photos/800/500?random=1" },
    { url: "https://picsum.photos/800/500?random=2" },
    { url: "https://picsum.photos/800/500?random=3" },
  ];

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          <i className={`dripicons dripicons-cross`} />
        </button>

        <div className={styles.carouselContainer}>
          <img
            src={images[currentImageIndex].url}
            alt={`${attraction.name} view ${currentImageIndex + 1}`}
            className={styles.carouselImage}
          />

          <Flex
            className={styles.carouselControls}
            justify={JustifyContent.SPACE_BETWEEN}
            align={AlignItems.CENTER}
          >
            <ArrowButton
              direction="left"
              onClick={handlePrevious}
              disabled={false}
              ariaLabel="Previous image"
            />
            <ArrowButton
              direction="right"
              onClick={handleNext}
              disabled={false}
              ariaLabel="Next image"
            />
          </Flex>
        </div>

        <div className={styles.attractionInfo}>
          <h2>{attraction.name}</h2>
          <p className={styles.description}>{attraction.description}</p>

          <Flex
            direction={FlexDirection.COLUMN}
            gap={FlexGap.LARGE}
            align={AlignItems.START}
            className={styles.infoContainer}
          >
            <div className={styles.infoItem}>
              <span className={styles.label}>Attraction Type:</span>
              <span className={styles.value}>{attraction.type}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>City:</span>
              <span className={styles.value}>{attraction.location.city}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Place:</span>
              <span className={styles.value}>
                {` ${attraction.location.spot}`}
              </span>
            </div>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default AttractionModal;
