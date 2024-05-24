import Grid from "@app/components/layouts/Grid/Grid";
import { Featured } from "@app/components/molecules/Featured/Featured";
import styles from "./Location.module.scss";
import { Flex } from "@app/components/layouts/Flex/Flex";
import { AlignItems, JustifyContent } from "@app/shared/Layout/Layout";
import ImageText from "@app/components/molecules/ImageText/ImageText";
import { Columns } from "@app/components/layouts/Grid/Columns/Columns";
import SectionHeading from "@app/components/molecules/SectionHeading/SectionHeading";

const Location = () => {
  return (
    <section className={styles.Featured}>
      <Grid
        desktopColumns={4}
        tabletColumns={2}
        mobileColumns={2}
        aria-labelledby="featured-heading"
      >
        <Featured number="10M+" description="Visitors" />
        <Featured number="50+" description="Beaches" />
        <Featured number="12K" description="Total Destinations" />
        <Featured number="5.0" description="Average Rating" />
      </Grid>

      <Flex align={AlignItems.CENTER} justify={JustifyContent.SPACE_BETWEEN}>
        <SectionHeading
          preText="Best Locations"
          mainText=" Nigerian Touristic Attraction"
          description=" Extraordinary natural beauty, enjoy the rich culture and experience
          the friendliness of the local people"
        />
        <Grid
          desktopColumns={5}
          tabletColumns={2}
          mobileColumns={1}
          gridGap="2rem"
          align={AlignItems.CENTER}
        >
          <Columns span={3}>
            <ImageText
              src="https://picsum.photos/900/500"
              text="Kilimanjaro mountain"
              subtext="Tanzania"
            />
          </Columns>
          <Columns span={1}>
            <ImageText
              src="https://picsum.photos/900/755"
              text="Victoria Falls"
              subtext="Zimbabwe"
            />
          </Columns>
          <Columns span={1}>
            <ImageText
              src="https://picsum.photos/950/900"
              text="Obudu Cattle Ranch"
              subtext="Cross Rivers, Nigeria"
            />
          </Columns>
          <Columns span={3}>
            <ImageText
              src="https://picsum.photos/900/560"
              text="Sambissa Forest"
              subtext="Chibok, Nigeria"
            />
          </Columns>
        </Grid>
      </Flex>
    </section>
  );
};

export default Location;
