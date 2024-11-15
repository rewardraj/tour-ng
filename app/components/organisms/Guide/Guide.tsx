import Container from "@app/components/layouts/Container/Container";
import { Flex } from "@app/components/layouts/Flex/Flex";
import ImageText from "@app/components/molecules/ImageText/ImageText";
import {
  AlignItems,
  FlexDirection,
  FlexGap,
  FlexWrap,
  JustifyContent,
} from "@app/shared/Layout/Layout";
import styles from "./Guide.module.scss";
import { useState, useEffect } from "react";

export const steps = [
  {
    icon: "dripicons dripicons-search",
    main: "Find your destination",
    description:
      "Embark on a journey to discover your dream destination where adventure awaits",
    image: "https://picsum.photos/900/990",
  },
  {
    icon: "dripicons dripicons-message",
    main: "Book a ticket",
    description: "Secure your travel plans with our easy booking system",
    image: "https://picsum.photos/900/991",
  },
  {
    icon: "dripicons dripicons-conversation",
    main: "Make Payment",
    description: "Safe and secure payment options for your peace of mind",
    image: "https://picsum.photos/900/992",
  },
  {
    icon: "dripicons dripicons-location",
    main: "Explore destination",
    description: "Start your adventure and create unforgettable memories",
    image: "https://picsum.photos/900/993",
  },
];

const Guide = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleStepClick = (index: number) => {
    if (index !== activeStep) {
      setIsTransitioning(true);
      setActiveStep(index);
    }
  };

  useEffect(() => {
    let autoAdvanceTimer: NodeJS.Timeout;

    const startAutoAdvance = () => {
      autoAdvanceTimer = setInterval(() => {
        handleStepChange((activeStep + 1) % steps.length);
      }, 5000);
    };

    startAutoAdvance();

    return () => {
      clearInterval(autoAdvanceTimer);
    };
  }, [activeStep]);

  const handleStepChange = (index: number) => {
    if (index !== activeStep) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setActiveStep(index);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 300);
      }, 300);
      return () => clearTimeout(timer);
    }
  };

  return (
    <Container>
      <Flex
        align={AlignItems.END}
        className={styles.Guides__main}
        margin=" 6rem 0"
        wrap={FlexWrap.NO_WRAP}
        justify={JustifyContent.CENTER}
      >
        <Flex
          className={styles.stepsContainer}
          direction={FlexDirection.COLUMN}
          align={AlignItems.START}
          justify={JustifyContent.START}
          gap={FlexGap.MEDIUM}
          margin="1rem 0"
        >
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
          <div
            className={`${styles.imageWrapper} ${
              isTransitioning ? styles.fadeOut : ""
            }`}
          >
            <ImageText
              src={steps[activeStep].image}
              subtext={steps[activeStep].description}
              className={styles.imageGuide}
            />
          </div>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Guide;
