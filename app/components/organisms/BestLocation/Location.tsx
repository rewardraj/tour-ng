import Grid from "@app/components/layouts/Grid/Grid";
import { Featured } from "@app/components/molecules/Featured/Featured";
import { Flex } from "@app/components/layouts/Flex/Flex";
import { AlignItems, JustifyContent } from "@app/shared/Layout/Layout";
import ImageText from "@app/components/molecules/ImageText/ImageText";
import { Columns } from "@app/components/layouts/Grid/Columns/Columns";
import SectionHeading from "@app/components/molecules/SectionHeading/SectionHeading";
import styles from "./Location.module.scss";
import Container from "@app/components/layouts/Container/Container";
import { nigerianCities } from "@app/pages/Destination/data";
import { useTranslation } from "react-i18next";

const Location = () => {
  const allAttractions = nigerianCities.flatMap((city) => city.attractions);
  const firstFiveAttractions = allAttractions.slice(0, 5);
  const { t } = useTranslation();

  return (
    <Container>
      <Grid
        desktopColumns={4}
        tabletColumns={2}
        mobileColumns={2}
        aria-labelledby="featured-heading"
      >
        <Featured number="10M+" description={t("featured.visitors")} />
        <Featured number="50+" description={t("featured.beaches")} />
        <Featured number="12K" description={t("featured.destinations")} />
        <Featured number="5.0" description={t("featured.rating")} />
      </Grid>

      <Flex
        align={AlignItems.CENTER}
        justify={JustifyContent.SPACE_BETWEEN}
        className={styles.LocationGrid}
      >
        <SectionHeading mainText={t("sectionHeadings.topDestinations")} />
        <Grid
          desktopColumns={5}
          tabletColumns={2}
          mobileColumns={1}
          align={AlignItems.CENTER}
        >
          <Columns span={3} mobileSpan={1}>
            <ImageText
              src="https://picsum.photos/900/500"
              text={firstFiveAttractions[0].name}
              subtext={firstFiveAttractions[0].location.city}
            />
          </Columns>
          <Columns span={2} mobileSpan={1}>
            <ImageText
              src="https://picsum.photos/900/755"
              text={firstFiveAttractions[1].name}
              subtext={firstFiveAttractions[1].location.city}
            />
          </Columns>
          <Columns span={2} mobileSpan={1}>
            <ImageText
              src="https://picsum.photos/950/900"
              text={firstFiveAttractions[2].name}
              subtext={firstFiveAttractions[2].location.city}
            />
          </Columns>
          <Columns span={3} mobileSpan={1}>
            <ImageText
              src="https://picsum.photos/900/560"
              text={firstFiveAttractions[3].name}
              subtext={firstFiveAttractions[3].location.city}
            />
          </Columns>
        </Grid>
      </Flex>
    </Container>
  );
};

export default Location;
