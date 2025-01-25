import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
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
import { getStepsConfig } from "@app/shared/data/allData";
import { Container } from "@mui/material";

const Guide = () => {
  const { t } = useTranslation();
  const steps = getStepsConfig(t);

  const [activeStep, setActiveStep] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleStepClick = (index: number) => {
    if (index !== activeStep) {
      triggerTransition(index);
    }
  };

  useEffect(() => {
    const autoAdvanceTimer = setInterval(() => {
      triggerTransition((activeStep + 1) % steps.length);
    }, 5000);

    return () => clearInterval(autoAdvanceTimer);
  }, [activeStep, steps.length]);

  const triggerTransition = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveStep(index);
      setTimeout(() => setIsTransitioning(false), 300);
    }, 300);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 8,
        pt: 0,
        px: { xs: 2, sm: 2, md: 0 }, // Remove padding on medium screens (600px) and above
      }}
    >
      <Flex
        align={AlignItems.END}
        className={styles.Guide__main}
        margin="3rem 0"
        wrap={FlexWrap.NO_WRAP}
        justify={JustifyContent.CENTER}
      >
        {/* Steps */}
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

        {/* Image Display */}
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
