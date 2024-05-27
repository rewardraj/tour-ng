import Hero from "@app/components/organisms/Hero/Hero";
import Navbar from "@app/components/organisms/Navbar/Navbar";
import React from "react";
import Location from "@app/components/organisms/BestLocation/Location";
import Destinations from "@app/components/organisms/Destinations/Destinations";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Location />
      <Destinations />
    </React.Fragment>
  );
};

export default Home;
