import Grid from "@app/components/layouts/Grid/Grid";
import { Featured } from "@app/components/molecules/Featured/Featured";
import { Flex } from "@app/components/layouts/Flex/Flex";
import { AlignItems, JustifyContent } from "@app/shared/Layout/Layout";
import ImageText from "@app/components/molecules/ImageText/ImageText";
import { Columns } from "@app/components/layouts/Grid/Columns/Columns";
import SectionHeading from "@app/components/molecules/SectionHeading/SectionHeading";
import styles from "./Location.module.scss";
import Container from "@app/components/layouts/Container/Container";
import AttractionModal from "@app/components/molecules/AttractionModal/AttractionModal";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  featuredStats,
  HomeTopDestinationsImage,
  nigerianCities,
} from "@app/shared/data/allData";

const TopAttractions = () => {
  const allAttractions = nigerianCities.flatMap((city) => city.attractions);
  const firstFourAttractions = allAttractions.slice(0, 4);
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleImageTextClick = (attraction: any) => {
    setSelectedAttraction(attraction);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedAttraction(null);
    setShowModal(false);
  };

  const { t } = useTranslation();

  return (
    <Container>
      <Grid
        desktopColumns={4}
        tabletColumns={2}
        mobileColumns={2}
        aria-labelledby="featured-heading"
      >
        {featuredStats.map((stat, index) => (
          <Featured
            key={index}
            number={stat.number}
            description={t(stat.descriptionKey)}
          />
        ))}
      </Grid>

      <Flex
        align={AlignItems.CENTER}
        justify={JustifyContent.SPACE_BETWEEN}
        className={styles.LocationGrid}
      >
        <SectionHeading mainText={t("sectionHeadings.topAttractions")} />
        <Grid
          desktopColumns={5}
          tabletColumns={2}
          mobileColumns={1}
          align={AlignItems.CENTER}
        >
          {firstFourAttractions.map((attraction, index) => (
            <Columns
              key={index}
              span={index % 3 === 0 ? 3 : 2} // Alternating column spans for layout
              mobileSpan={1}
            >
              <ImageText
                src={HomeTopDestinationsImage[index]}
                text={attraction.name}
                height="350px"
                subtext={attraction.location.city}
                onClick={() => handleImageTextClick(attraction)}
              />
            </Columns>
          ))}
        </Grid>
      </Flex>

      {showModal && selectedAttraction && (
        <AttractionModal
          attraction={selectedAttraction}
          onClose={handleCloseModal}
        />
      )}
    </Container>
  );
};

export default TopAttractions;
