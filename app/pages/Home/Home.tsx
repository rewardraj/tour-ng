import Hero from "@app/components/organisms/Hero/Hero";
import Navbar from "@app/components/organisms/Navbar/Navbar";
import React from "react";
import Location from "@app/components/organisms/BestLocation/Location";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Location />
    </React.Fragment>
  );
};

export default Home;
