import { useState } from "react";
import { useTranslation } from "react-i18next";
import { City, TouristAttraction } from "./types";
import { nigerianCities } from "./data";
import Sidebar from "./components/Sidebar";
import Map from "./components/Map";
import styles from "./Destination.module.scss";
import MapLoader from "./components/MapLoader";

const Destination = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(
    nigerianCities[0]
  );
  const [selectedAttraction, setSelectedAttraction] =
    useState<TouristAttraction | null>(null);

  const { t } = useTranslation();
  
  return (
    <div className={styles.container}>
      <MapLoader>
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
      </MapLoader>
    </div>
  );
};

export default Destination;
