import Guide from "@app/components/organisms/Guide/Guide";
import Footer from "@app/components/organisms/Footer/Footer";
import Hero from "@app/components/organisms/Hero/Hero";
import Testimony from "@app/components/organisms/Testimony/Testimony";
import Memories from "@app/components/organisms/Memories/Memories";
import TopAttractions from "@app/components/organisms/TopAttractions/TopAttraction";
import BestNatureCities from "@app/components/organisms/BestNature/BestNatureCities";

const Home = () => {
  return (
    <>
      <Hero />
      <TopAttractions />
      <Guide />
      <BestNatureCities />
      <Testimony />
      <Memories />
      <Footer />
    </>
  );
};

export default Home;
