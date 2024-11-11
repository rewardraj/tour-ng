import { City } from "../types";
import { Flex } from "@app/components/layouts/Flex/Flex";
import {
  Headings,
  TextWeight,
} from "@app/components/atoms/Typography/Typography";
import Heading from "@app/components/atoms/Typography/Heading";
import {
  AlignItems,
  FlexDirection,
  JustifyContent,
} from "@app/shared/Layout/Layout";
import styles from "./Sidebar.module.scss";
import classNames from "classnames";
import { FaMapMarkerAlt } from "react-icons/fa";

interface SidebarProps {
  cities: City[];
  selectedCity: City | null;
  onCitySelect: (city: City) => void;
}

const Sidebar = ({ cities, selectedCity, onCitySelect }: SidebarProps) => {
  const sortedCities = cities.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className={styles.sidebarContainer}>
      <Flex
        direction={FlexDirection.COLUMN}
        gap="12px"
        align={AlignItems.CENTER}
        justify={JustifyContent.CENTER}
      >
        {sortedCities.map((city) => (
          <div
            key={city.id}
            className={classNames(styles.cityItem, {
              [styles.selected]: selectedCity?.id === city.id,
            })}
            onClick={() => onCitySelect(city)}
          >
            <Flex
              className={styles.cityDetails}
              align={AlignItems.START}
              justify={JustifyContent.START}
              gap="1rem"
            >
              <FaMapMarkerAlt className={styles.icon} />
              <Heading type={Headings.H3} weight={TextWeight.BOLD}>
                {t('destination.title')}
              </Heading>
            </Flex>
            <p className={styles.description}>{city.description}</p>
          </div>
        ))}
      </Flex>
    </div>
  );
};

export default Sidebar;
