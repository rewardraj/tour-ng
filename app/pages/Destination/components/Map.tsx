import { GoogleMap, Marker } from "@react-google-maps/api";
import styles from "./Map.module.scss";
import { useEffect } from "react";
import { City, TouristAttraction } from "@app/shared/data/allData";
import { useModal } from "@app/shared/contexts/ModalContext";

interface MapProps {
  selectedCity: City | null;
  selectedAttraction: TouristAttraction | null;
  onAttractionSelect: (attraction: TouristAttraction | null) => void;
}

const Map = ({ selectedCity, onAttractionSelect }: MapProps) => {
  const center = selectedCity?.location || { lat: 6.5244, lng: 3.3792 };
  const { openModal } = useModal();

  useEffect(() => {
    if (selectedCity && selectedCity.attractions.length > 0) {
      // Reset any selected attraction when city changes
      onAttractionSelect(null);
    }
  }, [selectedCity, onAttractionSelect]);

  const handleMarkerClick = (attraction: TouristAttraction) => {
    onAttractionSelect(attraction);
    openModal({ type: "attraction", data: attraction });
  };

  return (
    <div className={styles.mapContainer}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={center}
        zoom={10}
        options={{
          zoomControl: true,
          streetViewControl: true,
          mapTypeControl: true,
          fullscreenControl: true,
        }}
      >
        {selectedCity?.attractions.map((attraction) => (
          <Marker
            key={attraction.id}
            position={attraction.location}
            onClick={() => handleMarkerClick(attraction)}
            title={attraction.name}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
