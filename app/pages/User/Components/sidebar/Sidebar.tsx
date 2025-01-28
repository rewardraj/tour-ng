import styles from "./Sidebar.module.scss";
import { FaHome, FaPlane, FaHeart, FaCog } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>Tourism App</div>
      <ul className={styles.menu}>
        <li className={`${styles.menuItem} ${styles.selected}`}>
          <FaHome className={styles.icon} />
          <span>Home</span>
        </li>
        <li className={styles.menuItem}>
          <FaPlane className={styles.icon} />
          <span>Upcoming Trips</span>
        </li>
        <li className={styles.menuItem}>
          <FaHeart className={styles.icon} />
          <span>Saved Destinations</span>
        </li>
        <li className={styles.menuItem}>
          <FaCog className={styles.icon} />
          <span>Settings</span>
        </li>
      </ul>
    </aside>
  );
}
