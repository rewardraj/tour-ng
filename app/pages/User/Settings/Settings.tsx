import { useTranslation } from "node_modules/react-i18next";
import { FC } from "react";
import styles from "./Settings.module.scss";

export const Settings: FC = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.section}>
      <h2>{t("dashboard.settings.title")}</h2>
      <div className={styles.settingsList}>
        <div className={styles.settingItem}>
          <label>{t("dashboard.settings.notifications")}</label>
          <button className={styles.toggleButton}>
            {t("dashboard.settings.enable")}
          </button>
        </div>
        <div className={styles.settingItem}>
          <label>{t("dashboard.settings.language")}</label>
          <select title="select-input" className={styles.selectInput}>
            <option value="en">English</option>
            <option value="pl">Polski</option>
          </select>
        </div>
      </div>
    </section>
  );
};
