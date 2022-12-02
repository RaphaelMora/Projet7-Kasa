import React from "react";
import CollapseList from "./CollapseList";
import collapseData from "../datas/collapseData.json";

const Collapse = () => {
  return (
    <section className="collapse">
      <div className="collapse__container">
        {collapseData.map((val) => {
          return <CollapseList val={val} />;
        })}
      </div>
    </section>
  );
};

export default Collapse;
