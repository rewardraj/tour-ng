import { FC, useState } from "react";
import { useAuth } from "@app/shared/contexts/AuthContext";
import { useTranslation } from "react-i18next";
import styles from "./Dashboard.module.scss";
import Tabs from "../Components/Tabs";

const Dashboard: FC = () => {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState("home");

  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <section>
            <h2>Home</h2>
            <p>
              Welcome to the tourism dashboard! Explore destinations and manage
              your trips easily.
            </p>
          </section>
        );
      case "upcoming":
        return (
          <section>
            <h2>Upcoming Trips</h2>
            <p>
              Plan your next adventure and stay updated with upcoming travel
              schedules.
            </p>
          </section>
        );
      case "saved":
        return (
          <section>
            <h2>Saved Destinations</h2>
            <p>Review and manage your favorite tourist spots.</p>
          </section>
        );
      case "settings":
        return (
          <section>
            <h2>Settings</h2>
            <p>Customize your preferences and account settings here.</p>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.dashboard}>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className={styles.contentWrapper}>{renderTabContent()}</main>
    </div>
  );
};

export default Dashboard;
