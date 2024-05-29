import Hero from "@app/components/organisms/Hero/Hero";
import Navbar from "@app/components/organisms/Navbar/Navbar";
import React from "react";
import Location from "@app/components/organisms/BestLocation/Location";
import Destinations from "@app/components/organisms/Destinations/Destinations";
import Guide from "@app/components/organisms/Guide/Guide";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Location />
      <Guide />
      <Destinations />
    </React.Fragment>
  );
};

export default Home;
