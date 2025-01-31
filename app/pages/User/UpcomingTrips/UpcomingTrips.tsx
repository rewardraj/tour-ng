import styles from "./UpcomingTrips.module.scss";
import TripCard from "../Components/tripcard/TripCard";
import na1 from "@assets/images/places/Nike Art Gallery/1.jpg";
import cal1 from "@assets/images/activities/calabar carnival/1.jpg";
import jwp1 from "@assets/images/places/Jos wildlife park/1.jpg";

const upcomingTrips = [
  {
    id: "trip1",
    destination: "Ibadan",
    date: "2025-03-15",
    image: na1,
    description:
      "A prominent art gallery showcasing Nigerian art in the city that never sleeps!",
  },
  {
    id: "trip2",
    destination: "Calabar",
    date: "2025-04-02",
    image: cal1,
    description: "Experience the vibrant Calabar Carnival.",
  },
  {
    id: "trip3",
    destination: "Jos",
    date: "2025-05-10",
    image: jwp1,
    description: "Enjoy the cool climate and scenic views in Jos.",
  },
];

export default function UpcomingTrips() {
  return (
    <section className={styles.upcoming}>
      <h2>Upcoming Trips</h2>
      <div className={styles.tripGrid}>
        {upcomingTrips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </section>
  );
}
