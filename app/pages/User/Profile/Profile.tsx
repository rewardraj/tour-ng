import { User } from "firebase/auth";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Profile.module.scss";

interface ProfileProps {
  currentUser: User | null;
}
export const Profile: FC<ProfileProps> = ({ currentUser }) => {
  const { t } = useTranslation();
  return (
    <section className={styles.section}>
      <h2>{t("dashboard.profile.title")}</h2>
      <div className={styles.profileInfo}>
        <div className={styles.profileField}>
          <label>{t("dashboard.profile.email")}</label>
          <p>{currentUser?.email ?? t("dashboard.profile.noEmail")}</p>
        </div>
        <button className={styles.editButton}>
          {t("dashboard.profile.edit")}
        </button>
      </div>
    </section>
  );
};
