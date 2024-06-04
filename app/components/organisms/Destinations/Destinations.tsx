import { Flex } from "@app/components/layouts/Flex/Flex";
import { AlignItems, FlexGap, JustifyContent } from "@app/shared/Layout/Layout";
import SectionHeading from "@app/components/molecules/SectionHeading/SectionHeading";
import Container from "@app/components/layouts/Container/Container";
import Card from "@app/components/molecules/Card/Card";
import Grid from "@app/components/layouts/Grid/Grid";
import styles from "./Destination.module.scss";
import { useState } from "react";

const destinations = [
  {
    days: "2 days",
    stars: 4.5,
    image: "https://picsum.photos/900/500",
    alt: "place 1",
    location: "Abuja",
    price: 100,
  },
  {
    days: "3 days",
    stars: 4.5,
    image: "https://picsum.photos/900/600",
    alt: "place 2",
    location: "Lagos",
    price: 200,
  },
  {
    days: "4 days",
    stars: 4.5,
    image: "https://picsum.photos/900/700",
    alt: "place 3",
    location: "Calabar",
    price: 300,
  },

  {
    days: "4 days",
    stars: 4.5,
    image: "https://picsum.photos/910/700",
    alt: "place 3",
    location: "Calabar",
    price: 300,
  },

  {
    days: "4 days",
    stars: 4.5,
    image: "https://picsum.photos/690/700",
    alt: "place 3",
    location: "Calabar",
    price: 300,
  },

  {
    days: "4 days",
    stars: 4.5,
    image: "https://picsum.photos/720/700",
    alt: "place 3",
    location: "Calabar",
    price: 300,
  },
];

const Destinations = () => {
  const [currentPlace, setCurrentPlace] = useState(0);
  const allPlaces = [...destinations];

  const handleNext = () => {
    setCurrentPlace((currentPlace + 1) % allPlaces.length);
  };

  const handlePrevious = () => {
    setCurrentPlace((currentPlace - 1 + allPlaces.length) % allPlaces.length);
  };

  return (
    <Container>
      <Flex
        align={AlignItems.CENTER}
        justify={JustifyContent.SPACE_BETWEEN}
        className={styles.Layout}
      >
        <SectionHeading
          preText="Tour packages"
          mainText="Our Tourist Destination"
          description="Our tourist destinations offers an unrivaled blend of natural beauty and cultural riches"
        />
      </Flex>
      <Grid
        desktopColumns={3}
        tabletColumns={2}
        mobileColumns={1}
        aria-labelledby="featured-heading"
        className={styles.Layout}
      >
        {allPlaces
          .slice(currentPlace, currentPlace + 3)
          .map((destination, index) => (
            <Card
              key={index}
              days={destination.days}
              stars={destination.stars}
              src={destination.image}
              alt={destination.alt}
              location={destination.location}
              price={destination.price}
              icon="dripicons dripicons-star"
            />
          ))}
      </Grid>
      <div className={styles.more}>
        <Flex justify={JustifyContent.START} align={AlignItems.END}>
          <Flex gap={FlexGap.LARGE} margin="2rem 0">
            <button
              className={styles.button}
              onClick={handlePrevious}
              disabled={currentPlace === 0}
              aria-label="Show previous places"
              role="button"
            >
              <i className="dripicons dripicons-arrow-thin-left" />
            </button>
            <button
              className={styles.button}
              onClick={handleNext}
              disabled={currentPlace === allPlaces.length - 3}
              aria-label="Show next projects"
              role="button"
            >
              <i className="dripicons dripicons-arrow-thin-right" />
            </button>
          </Flex>
        </Flex>
      </div>
    </Container>
  );
};

export default Destinations;
