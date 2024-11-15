import Location from "@app/components/organisms/BestLocation/Location";
import Guide from "@app/components/organisms/Guide/Guide";
import Footer from "@app/components/organisms/Footer/Footer";
import Hero from "@app/components/organisms/Hero/Hero";
import Destinations from "@app/components/organisms/Destinations/Destinations";
import Testimony from "@app/components/organisms/Testimony/Testimony";
import Memories from "@app/components/organisms/Memories/Memories";

const Home = () => {
  return (
    <>
      <Hero />
      <Location />
      <Guide />
      <Destinations />
      <Testimony />
      <Memories />
      <Footer />
    </>
  );
};

export default Home;
