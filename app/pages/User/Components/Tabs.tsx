import { FC } from "react";
import styles from "./Tabs.module.scss";

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabItems = [
  { id: "home", label: "Home" },
  { id: "upcoming", label: "Upcoming Trips" },
  { id: "saved", label: "Saved Destinations" },
  { id: "settings", label: "Settings" },
];

const Tabs: FC<TabsProps> = ({ activeTab, setActiveTab }) => (
  <div className={styles.tabs} role="tablist" aria-label="Dashboard Tabs">
    {tabItems.map(({ id, label }) => (
      <div
        key={id}
        className={`${styles.tab} ${activeTab === id ? styles.active : ""}`}
        role="tab"
        aria-selected={activeTab === id}
        tabIndex={activeTab === id ? 0 : -1}
        onClick={() => setActiveTab(id)}
        onKeyPress={(e) => e.key === "Enter" && setActiveTab(id)}
      >
        {label}
      </div>
    ))}
  </div>
);

export default Tabs;
