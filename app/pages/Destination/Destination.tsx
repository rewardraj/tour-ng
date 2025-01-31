import { useState, useEffect, useMemo } from "react";
import Sidebar from "./components/Sidebar";
import Map from "./components/Map";
import styles from "./Destination.module.scss";
import {
  City,
  getNigerianCities,
  TouristAttraction,
} from "@app/shared/data/allData";
import { useTranslation } from "react-i18next";

const Destination = () => {
  const { t } = useTranslation();

  const [cities, setCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [selectedAttraction, setSelectedAttraction] =
    useState<TouristAttraction | null>(null);

  useEffect(() => {
    const fetchedCities = getNigerianCities(t);
    if (fetchedCities.length > 0) {
      setCities(fetchedCities);
      setSelectedCity(fetchedCities[0]);
    }
  }, [t]);

  const MemoizedMap = useMemo(() => {
    return selectedCity ? (
      <Map
        selectedCity={selectedCity}
        selectedAttraction={selectedAttraction}
        onAttractionSelect={setSelectedAttraction}
      />
    ) : null;
  }, [selectedCity, selectedAttraction]);

  return (
    <div className={styles.container}>
      <div className={styles.pageContainer}>
        <Sidebar
          cities={cities}
          selectedCity={selectedCity}
          onCitySelect={(city) => setSelectedCity(city || null)}
        />
        <div className={styles.mapContainer}>{MemoizedMap}</div>
      </div>
    </div>
  );
};

export default Destination;
