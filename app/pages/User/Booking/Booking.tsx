import { useTranslation } from "react-i18next";
import styles from "./Booking.module.scss";

export const Bookings: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.section}>
      <h2>{t("dashboard.bookings.title")}</h2>
      <p className={styles.emptyState}>{t("dashboard.bookings.noBookings")}</p>
    </section>
  );
};
