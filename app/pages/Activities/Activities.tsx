import { useState } from "react";
import ActivityModal from "./components/ActivityModal";
import Container from "@app/components/layouts/Container/Container";
import ActivityCard from "./components/ActivityCard";
import styles from "./Activities.module.scss";
import { Typography } from "@mui/material";
import { nigerianActivities } from "@app/shared/data/allData";
import { ActivityTypes } from "@app/shared/types/types";

const Activities = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedActivity, setSelectedActivity] =
    useState<ActivityTypes | null>(null);

  const categories = [
    "all",
    "Cultural",
    "Adventure",
    "Nature",
    "Entertainment",
    "Food",
  ];

  const filteredActivities =
    selectedCategory === "all"
      ? nigerianActivities
      : nigerianActivities.filter(
          (activity) => activity.category === selectedCategory
        );

  return (
    <Container>
      <div className={styles.activitiesPage}>
        <Typography variant="h4" textAlign="center" m={4}>
          Explore Activities in Nigeria
        </Typography>

        <div className={styles.filters}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterButton} ${
                selectedCategory === category ? styles.active : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredActivities.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              onClick={setSelectedActivity}
            />
          ))}
        </div>
      </div>
      {selectedActivity && (
        <ActivityModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}
    </Container>
  );
};

export default Activities;
