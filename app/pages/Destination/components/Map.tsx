import { useCallback, useRef } from 'react';
import { GoogleMap, InfoWindow } from '@react-google-maps/api';
import { City, TouristAttraction } from '../types';
import styles from './Map.module.scss';

interface MapProps {
  selectedCity: City | null;
  selectedAttraction: TouristAttraction | null;
  onAttractionSelect: (attraction: TouristAttraction | null) => void;
}

const Map = ({ selectedCity, selectedAttraction, onAttractionSelect }: MapProps) => {
  const mapRef = useRef<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const center = selectedCity?.location || { lat: 9.0765, lng: 7.3986 }; // Default to Abuja

  return (
    <div className={styles.mapContainer}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
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
        {selectedCity?.attractions.map((attraction) => {
          const { AdvancedMarkerElement } = google.maps.marker;
          return (
            <AdvancedMarkerElement
              key={attraction.id}
              position={attraction.location}
              onClick={() => onAttractionSelect(attraction)}
            />
          );
        })}
        
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
