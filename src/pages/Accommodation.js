import React from "react";
import Header from "../components/Header";
import Sliders from "../components/Sliders";
import Footer from "../components/Footer";
import accommodations from "../datas/accommodations.json";
import AccommoCollapse from "../components/AccommoCollapse";
import Host from "../components/Host";
import Location from "../components/Location";
import Tags from "../components/Tags";
import Stars from "../components/Stars";

const Accommodation = () => {
  return (
    <div>
      <Header />
      <Sliders slides={accommodations} />
      <Location />
      <Host />
      <Tags />
      <Stars />
      <AccommoCollapse />
      <Footer />
    </div>
  );
};

export default Accommodation;
