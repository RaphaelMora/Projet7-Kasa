import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Collapse from "../components/Collapse";
import Banner from "../components/Banner";

const About = () => {
  return (
    <div>
      <Header />
      <Banner about />
      <Collapse />
      <Footer />
    </div>
  );
};

export default About;
