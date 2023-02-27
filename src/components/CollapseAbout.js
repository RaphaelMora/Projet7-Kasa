import React from "react";
import Collapse from "./Collapse";
import collapseData from "../data/collapseData.json";

function CollapseAbout() {
  return (
    <section className='collapse collapse_about'>
      {collapseData.map((item, index) => (
        <Collapse
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </section>
  );
}

export default CollapseAbout;
