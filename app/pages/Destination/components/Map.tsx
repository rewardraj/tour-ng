import { GoogleMap, Marker } from "@react-google-maps/api";
import { City, TouristAttraction } from "../types";
import styles from "./Map.module.scss";
import { useState } from "react";
import AttractionModal from "@app/components/molecules/AttractionModal/AttractionModal";

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
  const center = selectedCity?.location || { lat: 6.5244, lng: 3.3792 };
  const [showModal, setShowModal] = useState(false);

  const handleMarkerClick = (attraction: TouristAttraction) => {
    onAttractionSelect(attraction);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    onAttractionSelect(null);
  };

  return (
    <div className={styles.mapContainer}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100dvh" }}
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

      {selectedAttraction && showModal && (
        <AttractionModal
          attraction={selectedAttraction}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Map;
