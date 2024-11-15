import { useState } from "react";
import Grid from "@app/components/layouts/Grid/Grid";
import Container from "@app/components/layouts/Container/Container";
import { ArrowButton } from "@app/components/atoms/IconButton/ArrowButton";
import { Flex } from "@app/components/layouts/Flex/Flex";
import { FlexGap } from "@app/shared/Layout/Layout";
import Card from "@app/components/molecules/ActivityCard/ActivityCard";
import SectionHeading from "@app/components/molecules/SectionHeading/SectionHeading";
import { useTranslation } from "react-i18next";

const activities = [
  {
    duration: "2 Hours",
    title: "Mountain Hiking Adventure",
    description: "Experience breathtaking views on guided mountain trails",
    imgSrc: "https://picsum.photos/900/500",
  },
  {
    duration: "3 Hours",
    title: "Cultural Food Tour",
    description: "Taste authentic local dishes and learn cooking traditions",
    imgSrc: "https://picsum.photos/900/501",
  },
  {
    duration: "Half Day",
    title: "Wildlife Safari",
    description: "Observe exotic animals in their natural habitat",
    imgSrc: "https://picsum.photos/900/502",
  },
  {
    duration: "2 Hours",
    title: "Scuba Diving",
    description: "Explore vibrant coral reefs and marine life",
    imgSrc: "https://picsum.photos/900/503",
  },
  {
    duration: "Full Day",
    title: "Historical City Tour",
    description: "Visit ancient landmarks and learn local history",
    imgSrc: "https://picsum.photos/900/504",
  },
  {
    duration: "3 Hours",
    title: "Sunset Sailing",
    description: "Relaxing cruise with stunning ocean views",
    imgSrc: "https://picsum.photos/900/505",
  },
];

const Activities = () => {
  const [currentActivity, setCurrentActivity] = useState(0);
  const { t } = useTranslation();
  const allActivities = [...activities];

  const showNext = () => {
    setCurrentActivity((currentActivity + 1) % allActivities.length);
  };

  const showPrevious = () => {
    setCurrentActivity(
      (currentActivity - 1 + allActivities.length) % allActivities.length
    );
  };

  return (
    <Container>
      <SectionHeading mainText={t("sectionHeadings.activities")} />

      <Grid desktopColumns={3} tabletColumns={2} mobileColumns={1}>
        {allActivities
          .slice(currentActivity, currentActivity + 3)
          .map((activity, index) => (
            <Card
              key={index}
              src={activity.imgSrc}
              alt={activity.title}
              location={activity.title}
            />
          ))}
      </Grid>
      <Flex gap={FlexGap.LARGE} margin="4rem 0">
        <ArrowButton
          direction="left"
          onClick={showPrevious}
          disabled={currentActivity === 0}
          ariaLabel="Show previous activities"
        />
        <ArrowButton
          direction="right"
          onClick={showNext}
          disabled={currentActivity === allActivities.length - 3}
          ariaLabel="Show next activities"
        />
      </Flex>
    </Container>
  );
};

export default Activities;
