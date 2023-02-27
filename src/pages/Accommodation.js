import React from "react";
import Header from "../components/Header";
import Sliders from "../components/Sliders";
import Footer from "../components/Footer";
import accommodations from "../data/accommodations.json";
import Host from "../components/Host";
import Location from "../components/Location";
import Tags from "../components/Tags";
import Stars from "../components/Stars";
import CollapseAccommodation from "../components/CollapseAccommodation";

const Accommodation = () => {
  return (
    <div>
      <Header />
      <Sliders slides={accommodations} />
      <Location />
      <Host />
      <Tags />
      <Stars />
      <CollapseAccommodation />
      <Footer />
    </div>
  );
};

export default Accommodation;
