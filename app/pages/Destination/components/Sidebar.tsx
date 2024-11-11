import { City } from "../types";
import { Flex } from "@app/components/layouts/Flex/Flex";
import {
  Headings,
  Text,
  TextWeight,
} from "@app/components/atoms/Typography/Typography";
import Heading from "@app/components/atoms/Typography/Heading";
import { FlexDirection } from "@app/shared/Layout/Layout";
import styles from './Sidebar.module.scss';
import classNames from 'classnames';

interface SidebarProps {
  cities: City[];
  selectedCity: City | null;
  onCitySelect: (city: City) => void;
}

const Sidebar = ({ cities, selectedCity, onCitySelect }: SidebarProps) => {
  return (
    <div className={styles.sidebarContainer}>
      <Heading
        type={Headings.H2}
        weight={TextWeight.BOLD}
        style={{ marginBottom: "20px" }}
      >
        Nigerian Cities
      </Heading>
      <Flex direction={FlexDirection.COLUMN} gap={8}>
        {cities.map((city) => (
          <div
            key={city.id}
            className={classNames(styles.cityItem, {
              [styles.selected]: selectedCity?.id === city.id
            })}
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
          </div>
        ))}
      </Flex>
    </div>
  );
};

export default Sidebar;
