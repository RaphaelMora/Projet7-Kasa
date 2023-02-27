import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import CollapseAbout from "../components/CollapseAbout";

const About = () => {
  return (
    <div>
      <Header />
      <Banner about />
      <CollapseAbout />
      <Footer />
    </div>
  );
};

export default About;
