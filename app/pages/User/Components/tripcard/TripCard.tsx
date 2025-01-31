import styles from "./TripCard.module.scss";

interface Trip {
  id: string;
  destination: string;
  date: string;
  image: string;
  description: string;
}

interface TripCardProps {
  trip: Trip;
}

export default function TripCard({ trip }: TripCardProps) {
  return (
    <div className={styles.card}>
      <img src={trip.image} alt={trip.destination} className={styles.image} />
      <div className={styles.content}>
        <h3>{trip.destination}</h3>
        <p>{trip.description}</p>
        <span className={styles.date}>
          {new Date(trip.date).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}
