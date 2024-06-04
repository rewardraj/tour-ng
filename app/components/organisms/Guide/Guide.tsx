import Container from "@app/components/layouts/Container/Container";
import { Flex } from "@app/components/layouts/Flex/Flex";
import SectionHeading from "@app/components/molecules/SectionHeading/SectionHeading";
import ImageText from "@app/components/molecules/ImageText/ImageText";
import {
  AlignItems,
  FlexDirection,
  FlexGap,
  FlexWrap,
  JustifyContent,
} from "@app/shared/Layout/Layout";
import styles from "./Guide.module.scss";
import { useState } from "react";

export const steps = [
  {
    icon: "dripicons dripicons-search",
    main: "Find your destination",
    description:
      "Embark on a journey to discover your dream destination where adventure awaits",
  },
  {
    icon: "dripicons dripicons-message",
    main: "Book a ticket",
    description:
      "Embark on a journey to discover your dream destination where adventure awaits",
  },
  {
    icon: "dripicons dripicons-conversation",
    main: "Make Payment",
    description:
      "Embark on a journey to discover your dream destination where adventure awaits",
  },
  {
    icon: "dripicons dripicons-location",
    main: "Explore destination",
    description:
      "Embark on a journey to discover your dream destination where adventure awaits",
  },
];

const Guide = () => {
  const [activeStep, setActiveStep] = useState(null);

  const handleStepClick = (index: any) => {
    setActiveStep(index);
  };
  return (
    <Container className={styles.Layout}>
      <Flex
        align={AlignItems.END}
        className={styles.Guides__main}
        margin=" 10rem 0"
        wrap={FlexWrap.NO_WRAP}
        justify={JustifyContent.CENTER}
      >
        <Flex
          className={styles.stepsContainer}
          direction={FlexDirection.COLUMN}
          align={AlignItems.START}
          justify={JustifyContent.SPACE_BETWEEN}
          gap={FlexGap.MEDIUM}
          margin="1rem 0"
        >
          <SectionHeading preText="How it works" mainText="One click for you" />
          {steps.map((step, index) => (
            <Flex
              key={index}
              justify={JustifyContent.START}
              gap={FlexGap.MEDIUM}
              margin="1rem 0"
              className={`${styles.step} ${
                activeStep === index ? styles.active : ""
              }`}
              onClick={() => handleStepClick(index)}
            >
              <i className={`${step.icon} ${styles.iconGuide}`}></i>
              <Flex
                direction={FlexDirection.COLUMN}
                align={AlignItems.START}
                gap={FlexGap.MEDIUM}
                justify={JustifyContent.START}
                width="450px"
              >
                <span className={styles.main}>{step.main}</span>
                <span className={styles.description}>{step.description}</span>
              </Flex>
            </Flex>
          ))}
        </Flex>
        <Flex className={styles.imageContainer} justify={JustifyContent.END}>
          <ImageText
            src="https://picsum.photos/900/950"
            subtext="Embark on a journey to find your dream destination where adventure and relaxation awaits."
            className={styles.imageGuide}
          />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Guide;
