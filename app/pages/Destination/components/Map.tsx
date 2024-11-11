import { useCallback, useEffect, useRef } from "react";
import { GoogleMap, InfoWindow } from "@react-google-maps/api";
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
  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const center = selectedCity?.location || { lat: 9.0765, lng: 7.3986 }; // Default to Abuja

  useEffect(() => {
    if (
      mapRef.current &&
      selectedCity?.attractions &&
      google.maps.marker?.AdvancedMarkerElement // Check if AdvancedMarkerElement is available
    ) {
      // Clear previous markers
      markersRef.current.forEach((marker) => (marker.map = null));
      markersRef.current = [];

      // Create new AdvancedMarkerElements for each attraction
      selectedCity.attractions.forEach((attraction) => {
        const marker = new google.maps.marker.AdvancedMarkerElement({
          map: mapRef.current!,
          position: attraction.location,
          title: attraction.name,
        });

        // Add click listener to select the attraction
        marker.addListener("click", () => onAttractionSelect(attraction));

        // Store marker in ref for cleanup
        markersRef.current.push(marker);
      });
    }

    return () => {
      // Cleanup markers when component unmounts or selectedCity changes
      markersRef.current.forEach((marker) => (marker.map = null));
    };
  }, [selectedCity, onAttractionSelect]);

  return (
    <div className={styles.mapContainer}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={center}
        zoom={12}
        onLoad={onLoad}
        options={{
          zoomControl: true,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: true,
        }}
      >
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
