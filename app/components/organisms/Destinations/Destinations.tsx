import { Flex } from "@app/components/layouts/Flex/Flex";
import { AlignItems, FlexGap, JustifyContent } from "@app/shared/Layout/Layout";
import SectionHeading from "@app/components/molecules/SectionHeading/SectionHeading";
import Container from "@app/components/layouts/Container/Container";
import Card from "@app/components/molecules/ActivityCard/ActivityCard";
import Grid from "@app/components/layouts/Grid/Grid";
import { useState } from "react";
import { ArrowButton } from "@app/components/atoms/IconButton/ArrowButton";
import { nigerianCities } from "@app/pages/Destination/data";
import { useTranslation } from "react-i18next";

export const cityImages = {
  Lagos: "https://picsum.photos/800/500?random=1",
  Abuja: "https://picsum.photos/800/500?random=2",
  Kano: "https://picsum.photos/800/500?random=3",
  Jos: "https://picsum.photos/800/500?random=4",
  "Port Harcourt": "https://picsum.photos/800/500?random=5",
  Enugu: "https://picsum.photos/800/500?random=6",
} as const;

const Destinations = () => {
  const [currentPlace, setCurrentPlace] = useState(0);
  const { t } = useTranslation();
  const bestCities = nigerianCities.slice(0, 6).map((city) => ({
    days: "3 days",
    stars: 4.5,
    image: cityImages[city.name as keyof typeof cityImages],
    alt: city.name,
    location: city.location.city,
  }));

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
              days={destination.days}
              stars={destination.stars}
              src={destination.image}
              alt={destination.alt}
              location={destination.location}
              icon="dripicons dripicons-star"
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
              ariaLabel="Show next projects"
            />
          </Flex>
        </Flex>
      </div>
    </Container>
  );
};

export default Destinations;
