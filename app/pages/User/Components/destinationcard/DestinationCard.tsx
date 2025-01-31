import styles from "./DestinationCard.module.scss";

interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <div className={styles.card}>
      <img
        src={destination.image}
        alt={destination.name}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3>{destination.name}</h3>
        <p>{destination.description}</p>
      </div>
    </div>
  );
}
