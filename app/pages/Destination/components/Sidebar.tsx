import styled from 'styled-components';
import { City } from '../types';
import { Flex } from '@app/components/layouts/Flex/Flex';
import { Text, TextWeight } from '@app/components/atoms/Typography/Typography';

const SidebarContainer = styled.div`
  width: 300px;
  height: 100%;
  background-color: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  overflow-y: auto;
`;

const CityItem = styled.div<{ isSelected: boolean }>`
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${props => props.isSelected ? '#e6f7ff' : '#f5f5f5'};
  transition: all 0.3s ease;

  &:hover {
    background-color: #e6f7ff;
  }
`;

interface SidebarProps {
  cities: City[];
  selectedCity: City | null;
  onCitySelect: (city: City) => void;
}

const Sidebar = ({ cities, selectedCity, onCitySelect }: SidebarProps) => {
  return (
    <SidebarContainer>
      <Text as="h2" weight={TextWeight.BOLD} style={{ marginBottom: '20px' }}>
        Nigerian Cities
      </Text>
      <Flex direction="column" gap={8}>
        {cities.map(city => (
          <CityItem
            key={city.id}
            isSelected={selectedCity?.id === city.id}
            onClick={() => onCitySelect(city)}
          >
            <Text as="h3" weight={TextWeight.BOLD}>
              {city.name}
            </Text>
            <Text as="p" style={{ marginTop: '8px', fontSize: '14px' }}>
              {city.description}
            </Text>
          </CityItem>
        ))}
      </Flex>
    </SidebarContainer>
  );
};

export default Sidebar;
