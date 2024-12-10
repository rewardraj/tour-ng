import { useState, useEffect } from "react";
import styles from "./Hero.module.scss";
import Heading from "@app/components/atoms/Typography/Heading";
import {
  Headings,
  TextWeight,
} from "@app/components/atoms/Typography/Typography";
import { TextColorVariant } from "@app/shared/Variants/variants";
import { useTranslation } from "react-i18next";
import { heroSlides } from "@app/shared/data/allData";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={styles.heroContainer}
      style={{ backgroundImage: `url(${heroSlides[currentImageIndex].src})` }}
    >
      <div className={styles.heroContent}>
        <span className={styles.heroSpan}>{t("hero.explore")}</span>
        <Heading
          type={Headings.H1}
          weight={TextWeight.BOLD}
          color={TextColorVariant.PRIMARY}
          className={styles.heroHeading}
        >
          {t(heroSlides[currentImageIndex].headingKey)}
        </Heading>
        <p className={styles.heroSubheading}>
          {t(heroSlides[currentImageIndex].subHeadingKey)}
        </p>
      </div>
    </div>
  );
};

export default Hero;
