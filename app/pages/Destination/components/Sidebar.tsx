import styled from "styled-components";
import { City } from "../types";
import { Flex } from "@app/components/layouts/Flex/Flex";
import {
  Headings,
  Text,
  TextWeight,
} from "@app/components/atoms/Typography/Typography";
import Heading from "@app/components/atoms/Typography/Heading";
import { FlexDirection } from "@app/shared/Layout/Layout";

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
  background-color: ${(props) => (props.isSelected ? "#e6f7ff" : "#f5f5f5")};
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
      <Heading
        type={Headings.H2}
        weight={TextWeight.BOLD}
        style={{ marginBottom: "20px" }}
      >
        Nigerian Cities
      </Heading>
      <Flex direction={FlexDirection.COLUMN} gap={8}>
        {cities.map((city) => (
          <CityItem
            key={city.id}
            isSelected={selectedCity?.id === city.id}
            onClick={() => onCitySelect(city)}
          >
            <Heading type={Headings.H3} weight={TextWeight.BOLD}>
              {city.name}
            </Heading>
            <Heading
              type={Headings.H5}
              style={{ marginTop: "8px", fontSize: "14px" }}
            >
              {city.description}
            </Heading>
          </CityItem>
        ))}
      </Flex>
    </SidebarContainer>
  );
};

export default Sidebar;
