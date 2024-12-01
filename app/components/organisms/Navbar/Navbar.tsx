import { FC, useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.scss";
import { GB, PL } from "country-flag-icons/react/3x2";
import { IoChevronDown } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar: FC = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguage = async (lng: string) => {
    try {
      await i18n.changeLanguage(lng);
      localStorage.setItem("preferredLanguage", lng);
      setIsLangDropdownOpen(false);
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <NavLink to="/" className={styles.logoLink}>
            <img
              src="app/assets/images/logo.png"
              alt="Logo"
              height={48}
              width={48}
            />
          </NavLink>
        </div>

        <div className={styles.mobileControls}>
          <div
            className={`${styles.languageSelector} ${styles.mobileLanguageSelector}`}
            ref={dropdownRef}
          >
            <button
              className={styles.languageToggle}
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              aria-expanded={isLangDropdownOpen}
            >
              {currentLanguage === "en" ? (
                <GB className={styles.flag} />
              ) : (
                <PL className={styles.flag} />
              )}
              <IoChevronDown
                className={`${styles.chevron} ${
                  isLangDropdownOpen ? styles.open : ""
                }`}
              />
            </button>

            {isLangDropdownOpen && (
              <div className={styles.dropdown}>
                <button
                  className={`${styles.dropdownItem} ${
                    currentLanguage === "en" ? styles.active : ""
                  }`}
                  onClick={() => changeLanguage("en")}
                >
                  <GB className={styles.flag} />
                  <span>English</span>
                </button>
                <button
                  className={`${styles.dropdownItem} ${
                    currentLanguage === "pl" ? styles.active : ""
                  }`}
                  onClick={() => changeLanguage("pl")}
                >
                  <PL className={styles.flag} />
                  <span>Polski</span>
                </button>
              </div>
            )}
          </div>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <RxHamburgerMenu />
          </button>
        </div>

        <div
          className={`${styles.navContent} ${
            isMobileMenuOpen ? styles.open : ""
          }`}
        >
          <div className={styles.links}>
            <NavLink
              to="/destinations"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {t("nav.destinations")}
            </NavLink>
            <NavLink
              to="/activities"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {t("nav.activities")}
            </NavLink>
          </div>

          <div className={styles.languageSelector} ref={dropdownRef}>
            <button
              className={styles.languageToggle}
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              aria-expanded={isLangDropdownOpen}
            >
              {currentLanguage === "en" ? (
                <GB className={styles.flag} />
              ) : (
                <PL className={styles.flag} />
              )}
              <span className={styles.currentLanguage}>
                {currentLanguage.toUpperCase()}
              </span>
              <IoChevronDown
                className={`${styles.chevron} ${
                  isLangDropdownOpen ? styles.open : ""
                }`}
              />
            </button>

            {isLangDropdownOpen && (
              <div className={styles.dropdown}>
                <button
                  className={`${styles.dropdownItem} ${
                    currentLanguage === "en" ? styles.active : ""
                  }`}
                  onClick={() => changeLanguage("en")}
                >
                  <GB className={styles.flag} />
                  <span>English</span>
                </button>
                <button
                  className={`${styles.dropdownItem} ${
                    currentLanguage === "pl" ? styles.active : ""
                  }`}
                  onClick={() => changeLanguage("pl")}
                >
                  <PL className={styles.flag} />
                  <span>Polski</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
