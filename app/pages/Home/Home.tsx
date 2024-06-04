import Hero from "@app/components/organisms/Hero/Hero";
import Navbar from "@app/components/organisms/Navbar/Navbar";
import React from "react";
import Location from "@app/components/organisms/BestLocation/Location";
import Destinations from "@app/components/organisms/Destinations/Destinations";
import Guide from "@app/components/organisms/Guide/Guide";
// import Footer from "@app/components/organisms/Footer/Footer";
// import Memories from "@app/components/organisms/Memories/Memories";
import Testimony from "@app/components/organisms/Testimony/Testimony";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Location />
      <Guide />
      <Destinations />
      <Testimony />
      {/* <Memories />
      <Footer /> */}
    </React.Fragment>
  );
};

export default Home;
