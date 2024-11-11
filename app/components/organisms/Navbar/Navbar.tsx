import { useState, useEffect, FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { Flex } from "@app/components/layouts/Flex/Flex";

const Navbar: FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80); // Smaller scroll threshold for activation
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationBg =
    location.pathname !== "/home" ? styles.darkMode : styles.lightMode;

  return (
    <nav
      className={`${styles.navbar} ${
        scrolled ? styles.navbarScrolled : ""
      } ${navigationBg}`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <NavLink to="/" className={styles.logoLink}>
            Tour<span className={styles.logoHighlight}>.NG</span>
          </NavLink>
        </div>
        <Flex>
          <div className={styles.links}>
            <NavLink
              to="/destinations"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              Destinations
            </NavLink>
            <NavLink
              to="/activities"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              Activities
            </NavLink>
          </div>
          <div className={styles.languageButtons}>
            <button
              aria-label="Switch to Polish"
              className={styles.languageButton}
            >
              PL
            </button>
            <button
              aria-label="Switch to English"
              className={styles.languageButton}
            >
              EN
            </button>
          </div>
        </Flex>
      </div>
    </nav>
  );
};

export default Navbar;
