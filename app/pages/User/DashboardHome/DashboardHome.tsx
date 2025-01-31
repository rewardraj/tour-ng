import styles from "./DashboardHome.module.scss";

export default function DashboardHome() {
  return (
    <section className={styles.home}>
      <h2>Welcome Home!</h2>
      <p>
        Welcome to your tourism dashboard! Discover recommended destinations,
        explore local events, and get inspired for your next adventure.
      </p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Discover New Destinations</h3>
          <p>
            Browse our curated list of must-see tourist spots and hidden gems.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Travel News</h3>
          <p>
            Stay updated with the latest trends and tips for your next journey.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Special Offers</h3>
          <p>Enjoy exclusive deals and discounts on trips and activities.</p>
        </div>
      </div>
    </section>
  );
}
