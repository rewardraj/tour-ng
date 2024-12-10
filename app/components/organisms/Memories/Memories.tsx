import { useState } from "react";
import Grid from "@app/components/layouts/Grid/Grid";
import Container from "@app/components/layouts/Container/Container";
import { ArrowButton } from "@app/components/atoms/IconButton/ArrowButton";
import { Flex } from "@app/components/layouts/Flex/Flex";
import { FlexGap } from "@app/shared/Layout/Layout";
import Card from "@app/components/molecules/ActivityCard/ActivityCard";
import SectionHeading from "@app/components/molecules/SectionHeading/SectionHeading";
import { useTranslation } from "react-i18next";
import { nigerianActivities } from "@app/shared/data/allData";
import ActivityModal from "@app/pages/Activities/components/ActivityModal";
import { ActivityTypes } from "@app/shared/types/types";

const Activities = () => {
  const [currentActivity, setCurrentActivity] = useState(0);
  const { t } = useTranslation();
  const allActivities = [...nigerianActivities];
  const [selectedActivity, setSelectedActivity] =
    useState<ActivityTypes | null>(null);

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
          .map((activity, _index) => (
            <Card
              key={activity.id}
              src={activity.image}
              alt={activity.name}
              location={activity.city}
              activity={activity}
              onClick={setSelectedActivity}
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
      {selectedActivity && (
        <ActivityModal
          activity={selectedActivity} // Pass the selected memory to the modal
          onClose={() => setSelectedActivity(null)} // Close the modal by clearing the selected memory
        />
      )}
    </Container>
  );
};

export default Activities;
