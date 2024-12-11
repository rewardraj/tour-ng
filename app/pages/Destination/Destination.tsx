import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Map from "./components/Map";
import styles from "./Destination.module.scss";
import {
  City,
  nigerianCities,
  TouristAttraction,
} from "@app/shared/data/allData";

const Destination = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [selectedAttraction, setSelectedAttraction] =
    useState<TouristAttraction | null>(null);

  // Set the default city (e.g., Abuja) when the page loads
  useEffect(() => {
    const defaultCity = nigerianCities.find((city) => city.name === "Abuja");
    if (defaultCity) {
      setSelectedCity(defaultCity);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.pageContainer}>
        <Sidebar
          cities={nigerianCities}
          selectedCity={selectedCity}
          onCitySelect={setSelectedCity}
        />
        <div className={styles.mapContainer}>
          {selectedCity && (
            <Map
              selectedCity={selectedCity}
              selectedAttraction={selectedAttraction}
              onAttractionSelect={setSelectedAttraction}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Destination;
