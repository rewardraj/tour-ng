import { Flex } from "@app/components/layouts/Flex/Flex";
import { AlignItems, JustifyContent } from "@app/shared/Layout/Layout";
import SectionHeading from "@app/components/molecules/SectionHeading/SectionHeading";
import Container from "@app/components/layouts/Container/Container";
import Card from "@app/components/molecules/Card/Card";
import Grid from "@app/components/layouts/Grid/Grid";
import styles from "./Destination.module.scss";

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
];

const Destinations = () => {
  return (
    <Container>
      <Flex align={AlignItems.CENTER} justify={JustifyContent.SPACE_BETWEEN}>
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
      >
        {destinations.map((destination, index) => (
          <Card
            key={index}
            days={destination.days}
            stars={destination.stars}
            src={destination.image}
            alt={destination.alt}
            location={destination.location}
            price={destination.price}
          />
        ))}
      </Grid>
      <Flex justify={JustifyContent.CENTER} align={AlignItems.CENTER}>
        <button type="button" className={styles.ViewMore}>
          View More
        </button>
      </Flex>
    </Container>
  );
};

export default Destinations;
