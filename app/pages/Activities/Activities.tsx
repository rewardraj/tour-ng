import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useModal } from "@app/shared/contexts/ModalContext";
import ActivityCard from "./components/ActivityCard";
import styles from "./Activities.module.scss";
import { Button, Container, Typography } from "@mui/material";
import { nigerianActivities } from "@app/shared/data/allData";

const Activities = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { openModal } = useModal();

  const categories = [
    { key: "all", label: t("activities.categories.all") },
    { key: "cultural", label: t("activities.categories.cultural") },
    { key: "adventure", label: t("activities.categories.adventure") },
    { key: "nature", label: t("activities.categories.nature") },
    { key: "entertainment", label: t("activities.categories.entertainment") },
    { key: "food", label: t("activities.categories.food") },
  ];

  const filteredActivities =
    selectedCategory === "all"
      ? nigerianActivities
      : nigerianActivities.filter(
          (activity) => activity.category.toLowerCase() === selectedCategory
        );

  return (
    <Container maxWidth="lg" sx={{ pt: 8 }}>
      <div className={styles.activitiesPage}>
        <Typography variant="h4" textAlign="center" m={4}>
          {t("sectionHeadings.featuredActivities")}
        </Typography>

        <div className={styles.filters}>
          {categories.map((category) => (
            <Button
              key={category.key}
              color="inherit"
              className={`${styles.filterButton} ${
                selectedCategory === category.key ? styles.active : ""
              }`}
              onClick={() => setSelectedCategory(category.key)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredActivities.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              onClick={(activity) =>
                openModal({ type: "activity", data: activity })
              }
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Activities;
