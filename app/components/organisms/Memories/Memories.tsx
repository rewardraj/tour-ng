import { useState, useMemo } from "react";
import Grid from "@app/components/layouts/Grid/Grid";
import { Flex } from "@app/components/layouts/Flex/Flex";
import { AlignItems, FlexGap, JustifyContent } from "@app/shared/Layout/Layout";
import Card from "@app/components/molecules/ActivityCard/ActivityCard";
import SectionHeading from "@app/components/molecules/SectionHeading/SectionHeading";
import { useTranslation } from "react-i18next";
import { ActivityTypes, getNigerianActivites } from "@app/shared/data/allData";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useModal } from "@app/shared/contexts/ModalContext";

const Activities = () => {
  const [currentActivity, _setCurrentActivity] = useState(1);
  const { t } = useTranslation();
  const { openModal } = useModal();
  const navigate = useNavigate();

  const nigerianActivities: ActivityTypes[] = useMemo(
    () => getNigerianActivites(t),
    [t]
  );

  const activitiesToShow = nigerianActivities.slice(
    currentActivity,
    currentActivity + 3
  );

  return (
    <Container maxWidth="lg" sx={{ py: 8, pt: 0 }}>
      <SectionHeading mainText={t("sectionHeadings.featuredActivities")} />

      <Grid desktopColumns={3} tabletColumns={2} mobileColumns={1}>
        {activitiesToShow.map((activity) => (
          <Card
            key={activity.id}
            src={activity.image}
            alt={activity.name}
            location={activity.city}
            activity={activity}
            onClick={(selectedActivity) =>
              openModal({ type: "activity", data: selectedActivity })
            }
          />
        ))}
      </Grid>
      <Flex
        gap={FlexGap.LARGE}
        align={AlignItems.CENTER}
        margin="2rem 0"
        justify={JustifyContent.START}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/activities")}
          sx={{
            background: `var(--color-background-light)`,
            borderRadius: `var(--border-radius-small)`,
            padding: "12px 16px",
            cursor: "pointer",
          }}
        >
          View more
        </Button>
      </Flex>
    </Container>
  );
};

export default Activities;
