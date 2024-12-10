import { Flex } from "@app/components/layouts/Flex/Flex";
import { AlignItems, FlexGap, JustifyContent } from "@app/shared/Layout/Layout";
import SectionHeading from "@app/components/molecules/SectionHeading/SectionHeading";
import Container from "@app/components/layouts/Container/Container";
import Card from "@app/components/molecules/ActivityCard/ActivityCard";
import Grid from "@app/components/layouts/Grid/Grid";
import { useState } from "react";
import { ArrowButton } from "@app/components/atoms/IconButton/ArrowButton";
import { useTranslation } from "react-i18next";
import { getBestNatureCities, nigerianCities } from "@app/shared/data/allData";

const BestNatureCities = () => {
  const [currentPlace, setCurrentPlace] = useState(0);
  const { t } = useTranslation();

  const bestCities = getBestNatureCities(nigerianCities);

  const handleNext = () => {
    setCurrentPlace((currentPlace + 1) % bestCities.length);
  };

  const handlePrevious = () => {
    setCurrentPlace((currentPlace - 1 + bestCities.length) % bestCities.length);
  };

  return (
    <Container>
      <Flex align={AlignItems.CENTER}>
        <SectionHeading mainText={t("sectionHeadings.bestNature")} />
      </Flex>
      <Grid
        desktopColumns={3}
        tabletColumns={2}
        mobileColumns={1}
        aria-labelledby="featured-heading"
      >
        {bestCities
          .slice(currentPlace, currentPlace + 3)
          .map((destination, index) => (
            <Card
              key={index}
              src={destination.image}
              alt={destination.alt}
              location={destination.location}
            />
          ))}
      </Grid>
      <div>
        <Flex justify={JustifyContent.START} align={AlignItems.END}>
          <Flex gap={FlexGap.LARGE} margin="4rem 0">
            <ArrowButton
              direction="left"
              onClick={handlePrevious}
              disabled={currentPlace === 0}
              ariaLabel="Show previous places"
            />
            <ArrowButton
              direction="right"
              onClick={handleNext}
              disabled={currentPlace === bestCities.length - 3}
              ariaLabel="Show next places"
            />
          </Flex>
        </Flex>
      </div>
    </Container>
  );
};

export default BestNatureCities;
