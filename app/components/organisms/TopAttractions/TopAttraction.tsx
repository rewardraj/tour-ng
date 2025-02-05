import { useMemo } from "react";
import Grid from "@app/components/layouts/Grid/Grid";
import { Featured } from "@app/components/molecules/Featured/Featured";
import { useTranslation } from "react-i18next";
import { Flex } from "@app/components/layouts/Flex/Flex";
import { AlignItems, JustifyContent } from "@app/shared/Layout/Layout";
import ImageText from "@app/components/molecules/ImageText/ImageText";
import { Columns } from "@app/components/layouts/Grid/Columns/Columns";
import SectionHeading from "@app/components/molecules/SectionHeading/SectionHeading";
import styles from "./Location.module.scss";
import { useModal } from "@app/shared/contexts/ModalContext";
import {
  featuredStats,
  HomeTopDestinationsImage,
  getNigerianCities,
  TouristAttraction,
  City,
} from "@app/shared/data/allData";
import { Container } from "@mui/material";

const TopAttractions = () => {
  const { openModal } = useModal();
  const { t } = useTranslation();
  const nigerianCities: City[] = useMemo(() => getNigerianCities(t), [t]);

  // Ensure there are cities before accessing their attractions
  const firstFourAttractions: TouristAttraction[] =
    nigerianCities.length >= 2
      ? [
          nigerianCities[0]?.attractions[0],
          nigerianCities[0]?.attractions[1],
          nigerianCities[1]?.attractions[0],
          nigerianCities[1]?.attractions[2],
        ]
      : [];

  const handleImageTextClick = (attraction: TouristAttraction) => {
    openModal({ type: "attraction", data: attraction });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8, pt: 0 }}>
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
            <Columns key={index} span={index % 3 === 0 ? 3 : 2} mobileSpan={1}>
              <ImageText
                src={HomeTopDestinationsImage[index]}
                text={attraction?.name || ""}
                height="350px"
                subtext={attraction?.location?.city || ""}
                onClick={() => handleImageTextClick(attraction)}
              />
            </Columns>
          ))}
        </Grid>
      </Flex>
    </Container>
  );
};

export default TopAttractions;
