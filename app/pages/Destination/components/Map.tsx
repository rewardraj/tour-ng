import { useCallback, useRef } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { City, TouristAttraction } from "../types";
import styles from "./Map.module.scss";

interface MapProps {
  selectedCity: City | null;
  selectedAttraction: TouristAttraction | null;
  onAttractionSelect: (attraction: TouristAttraction | null) => void;
}

const Map = ({
  selectedCity,
  selectedAttraction,
  onAttractionSelect,
}: MapProps) => {
  const onLoad = useCallback((map: google.maps.Map) => {
    // Map loaded callback if needed
  }, []);

  const center = selectedCity?.location || { lat: 6.5244, lng: 3.3792 }; // Default to Lagos

  return (
    <div className={styles.mapContainer}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={center}
        zoom={10}
        onLoad={onLoad}
        options={{
          zoomControl: true,
          streetViewControl: false,
          mapTypeControl: true,
          fullscreenControl: true,
        }}
      >
        {selectedCity?.attractions.map((attraction) => (
          <Marker
            key={attraction.id}
            position={attraction.location}
            onClick={() => onAttractionSelect(attraction)}
            title={attraction.name}
          />
        ))}
        {selectedAttraction && (
          <InfoWindow
            position={selectedAttraction.location}
            onCloseClick={() => onAttractionSelect(null)}
          >
            <div className={styles.infoWindow}>
              <h3>{selectedAttraction.name}</h3>
              <p>{selectedAttraction.description}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default Map;
