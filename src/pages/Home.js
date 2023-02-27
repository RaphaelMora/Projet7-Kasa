import React from "react";
import Accommodation from "../components/Card";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner home />
      <Accommodation />
      <Footer />
    </div>
  );
};

export default Home;
