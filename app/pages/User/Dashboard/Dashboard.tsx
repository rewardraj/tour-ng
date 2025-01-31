import { useState } from "react";
import styles from "./Dashboard.module.scss";
import Tabs from "../Components/Tabs";
import DashboardHome from "../DashboardHome/DashboardHome";
import UpcomingTrips from "../UpcomingTrips/UpcomingTrips";
import SavedDestinations from "../SavedDestination/SavedDestination";
import Settings from "../Settings/Settings";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home");

  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return <DashboardHome />;
      case "upcoming":
        return <UpcomingTrips />;
      case "saved":
        return <SavedDestinations />;
      case "settings":
        return <Settings />;
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
}
