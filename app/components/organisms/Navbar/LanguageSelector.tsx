import { FC, useState, useRef } from "react";
import { GB, PL } from "country-flag-icons/react/3x2";
import { useTranslation } from "react-i18next";
import styles from "./Selector.module.scss";

export const LanguageSelector: FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
    setIsOpen(false);
    localStorage.setItem("preferredLanguage", lng);
  };

  return (
    <div className={styles.languageSelector} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.toggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {currentLanguage === "en" ? <GB /> : <PL />}
      </button>
      {isOpen && (
        <div className={`${styles.dropdown} ${isOpen ? styles.show : ""}`}>
          <button
            onClick={() => changeLanguage("en")}
            className={`${styles.dropdownItem} ${
              currentLanguage === "en" ? styles.active : ""
            }`}
          >
            <GB /> English
          </button>
          <button
            onClick={() => changeLanguage("pl")}
            className={`${styles.dropdownItem} ${
              currentLanguage === "pl" ? styles.active : ""
            }`}
          >
            <PL /> Polski
          </button>
        </div>
      )}
    </div>
  );
};
