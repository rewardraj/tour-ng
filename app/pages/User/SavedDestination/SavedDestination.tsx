import styles from "./SavedDestination.module.scss";
import DestinationCard from "../Components/destinationcard/DestinationCard";
import obd1 from "@assets/images/places/Obudu/1.jpg";
import lk1 from "@assets/images/places/Lekki Conservation Center/1.jpg";
import mp1 from "@assets/images/places/Millenium Park/1.jpg";
const SavedDestination = [
  {
    id: "Obudu",
    name: "Obudu Mountain Resort",
    image: obd1,
    description: "A breathtaking mountain resort in Cross River.",
  },
  {
    id: "Lagos",
    name: "Lekki Conservation Centre",
    image: lk1,
    description: "Enjoy nature from above on the canopy walkway.",
  },
  {
    id: "Abuja",
    name: "Millennium Park",
    image: mp1,
    description: "Large park with lush greenery and walking paths.",
  },
];

export default function SavedDestinations() {
  return (
    <section className={styles.saved}>
      <h2>Saved Destinations</h2>
      <div className={styles.destinationGrid}>
        {SavedDestination.map((dest) => (
          <DestinationCard key={dest.id} destination={dest} />
        ))}
      </div>
    </section>
  );
}
