import styles from "./Featured.module.scss";

interface FeaturedProps {
  number: string;
  description: string;
}

export const Featured: React.FC<FeaturedProps> = ({ number, description }) => (
  <section className={styles.Featured} aria-label="Featured section">
    <span aria-label="Number">{number}</span>
    <p aria-label="Description">{description}</p>
  </section>
);
