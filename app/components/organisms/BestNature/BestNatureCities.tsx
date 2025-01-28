import { Flex } from "@app/components/layouts/Flex/Flex";
import { AlignItems } from "@app/shared/Layout/Layout";
import SectionHeading from "@app/components/molecules/SectionHeading/SectionHeading";
import Card from "@app/components/molecules/ActivityCard/ActivityCard";
import Grid from "@app/components/layouts/Grid/Grid";
import { useTranslation } from "react-i18next";
import { getBestNatureCities } from "@app/shared/data/allData";
import { Container } from "@mui/material";

const BestNatureCities = () => {
  const { t } = useTranslation();
  const bestCities = getBestNatureCities();

  return (
    <Container maxWidth="lg" sx={{ py: 8, pt: 0 }}>
      <Flex align={AlignItems.CENTER}>
        <SectionHeading mainText={t("sectionHeadings.bestNature")} />
      </Flex>
      <Grid
        desktopColumns={3}
        tabletColumns={2}
        mobileColumns={1}
        aria-labelledby="featured-heading"
      >
        {bestCities.map((destination, index) => (
          <Card
            key={index}
            src={destination.image}
            alt={destination.alt}
            location={destination.location}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default BestNatureCities;
