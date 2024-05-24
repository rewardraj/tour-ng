import { Flex } from "@app/components/layouts/Flex/Flex";
import {
  Headings,
  TextWeight,
} from "@app/components/atoms/Typography/Typography";
import image2 from "@assets/images/hero/2.jpg";
import image3 from "@assets/images/hero/3.jpg";
import image4 from "@assets/images/hero/4.jpg";
import image5 from "@assets/images/hero/5.jpg";
import image6 from "@assets/images/hero/6.jpg";
import { FlexDirection } from "@app/shared/Layout/Layout";
import { Size } from "@app/shared/Sizes/Sizes";
import { TextColorVariant } from "@app/shared/Variants/variants";
import { useEffect, useState } from "react";
import Heading from "@app/components/atoms/Typography/Heading";
import styles from "./Hero.module.scss";
import Icon from "@app/components/atoms/IconButton/Icon";
import React from "react";

const Hero = () => {
  let images = [
    {
      src: image2,
      heading: "Welcome to Nigeria",
      location: "Lotus Temple",
    },
    {
      src: image2,
      heading: "Extraordinary Natural And Cultural Beauty",
      location: "Loften Islands, Norway",
    },
    {
      src: image3,
      heading: "Experience the Adventure",
      location: "Mount Everest, Nepal",
    },
    {
      src: image4,
      heading: "Enjoy the Scenic Beauty",
      location: "Loften Islands, Norway",
    },
    {
      src: image5,
      heading: "Experience the Adventure",
      location: "Mount Everest, Nepal",
    },
    {
      src: image6,
      heading: "Welcome to Nigeria",
      location: "Lotus Temple",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <main className={styles.Hero}>
      <section
        style={{
          backgroundImage: `url(${images[currentIndex].src})`,
          transition: "background-image 0.5s ease-in-out",
        }}
        className={styles.bg}
      />
      <Flex direction={FlexDirection.COLUMN} zIndex={2}>
        <Heading
          type={Headings.H2}
          weight={TextWeight.BOLD}
          color={TextColorVariant.PRIMARY}
        >
          {images[currentIndex].heading}
        </Heading>

        <React.Fragment>
          <Flex gap={16} margin="12px 0">
            <Icon
              size={Size.LARGE}
              icon="arrow-thin-left"
              color={TextColorVariant.TRANSPARENT}
              onClick={handlePrevClick}
              className={styles.Icon}
            ></Icon>
            <Icon
              size={Size.LARGE}
              icon="arrow-thin-right"
              color={TextColorVariant.TRANSPARENT}
              onClick={handleNextClick}
              className={styles.Icon}
            ></Icon>
          </Flex>
        </React.Fragment>
      </Flex>
    </main>
  );
};

export default Hero;
