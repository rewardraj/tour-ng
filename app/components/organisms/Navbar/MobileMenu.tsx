import { FC } from "react";
import { NavLink } from "react-router-dom";
import { LanguageSelector } from "./LanguageSelector";
import styles from "./MobileMenu.module.scss";

interface MobileMenuProps {
  closeMenu: () => void;
}

export const MobileMenu: FC<MobileMenuProps> = ({ closeMenu }) => (
  <div className={styles.mobileMenu}>
    <div className={styles.navContent}>
      <NavLink to="/destinations" onClick={closeMenu} className={styles.link}>
        Destinations
      </NavLink>
      <NavLink to="/activities" onClick={closeMenu} className={styles.link}>
        Activities
      </NavLink>
      <LanguageSelector />
    </div>
  </div>
);
