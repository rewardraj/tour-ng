import { useState, useEffect } from "react";
import heroImg1 from "@assets/images/hero/1.jpg";
import heroImg2 from "@assets/images/hero/2.jpg";
import heroImg3 from "@assets/images/hero/3.jpg";
import heroImg4 from "@assets/images/hero/4.jpg";
import heroImg5 from "@assets/images/hero/5.jpg";
import heroImg6 from "@assets/images/hero/6.jpg";
import styles from "./Hero.module.scss";
import Heading from "@app/components/atoms/Typography/Heading";
import {
  Headings,
  TextWeight,
} from "@app/components/atoms/Typography/Typography";
import { TextColorVariant } from "@app/shared/Variants/variants";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation();

  const images = [
    {
      src: heroImg4,
      heading: t("hero.slides.1.heading"),
      subHeading: t("hero.slides.1.subHeading"),
    },
    {
      src: heroImg2,
      heading: t("hero.slides.2.heading"),
      subHeading: t("hero.slides.2.subHeading"),
    },
    {
      src: heroImg3,
      heading: t("hero.slides.3.heading"),
      subHeading: t("hero.slides.3.subHeading"),
    },
    {
      src: heroImg1,
      heading: t("hero.slides.4.heading"),
      subHeading: t("hero.slides.4.subHeading"),
    },
    {
      src: heroImg5,
      heading: t("hero.slides.5.heading"),
      subHeading: t("hero.slides.5.subHeading"),
    },
    {
      src: heroImg6,
      heading: t("hero.slides.6.heading"),
      subHeading: t("hero.slides.6.subHeading"),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={styles.heroContainer}
      style={{ backgroundImage: `url(${images[currentImageIndex].src})` }}
    >
      <div className={styles.heroContent}>
        <span className={styles.heroSpan}>{t("hero.explore")}</span>
        <Heading
          type={Headings.H1}
          weight={TextWeight.BOLD}
          color={TextColorVariant.PRIMARY}
          className={styles.heroHeading}
        >
          {images[currentImageIndex].heading}
        </Heading>
        <p className={styles.heroSubheading}>
          {images[currentImageIndex].subHeading}
        </p>
      </div>
    </div>
  );
};

export default Hero;
