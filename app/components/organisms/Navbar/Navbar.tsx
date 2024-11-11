import { useState, useEffect, FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import styles from "./Navbar.module.scss";
import { Flex } from "@app/components/layouts/Flex/Flex";
import { GB, PL } from 'country-flag-icons/react/3x2';

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
              {t('nav.destinations')}
            </NavLink>
            <NavLink
              to="/activities"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {t('nav.activities')}
            </NavLink>
          </div>
          <div className={styles.languageButtons}>
            <button
              aria-label={t('languages.pl')}
              className={`${styles.languageButton} ${currentLanguage === 'pl' ? styles.active : ''}`}
              onClick={() => changeLanguage('pl')}
            >
              <PL title="Polski" className={styles.flag} />
            </button>
            <button
              aria-label={t('languages.en')}
              className={`${styles.languageButton} ${currentLanguage === 'en' ? styles.active : ''}`}
              onClick={() => changeLanguage('en')}
            >
              <GB title="English" className={styles.flag} />
            </button>
          </div>
        </Flex>
      </div>
    </nav>
  );
};

export default Navbar;
