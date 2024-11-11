import { useState } from 'react';
import { LoadScript } from '@react-google-maps/api';
import styled from 'styled-components';
import { City, TouristAttraction } from './types';
import { nigerianCities } from './data';
import Sidebar from './components/Sidebar';
import Map from './components/Map';

const PageContainer = styled.div`
  display: flex;
  height: calc(100vh - 64px); // Adjust based on your navbar height
  width: 100%;
`;

const MapContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Destination = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [selectedAttraction, setSelectedAttraction] = useState<TouristAttraction | null>(null);

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <PageContainer>
        <Sidebar
          cities={nigerianCities}
          selectedCity={selectedCity}
          onCitySelect={setSelectedCity}
        />
        <MapContainer>
          <Map
            selectedCity={selectedCity}
            selectedAttraction={selectedAttraction}
            onAttractionSelect={setSelectedAttraction}
          />
        </MapContainer>
      </PageContainer>
    </LoadScript>
  );
};

export default Destination;
