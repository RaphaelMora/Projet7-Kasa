import React, { useEffect, useState } from "react";
import Collapse from "./Collapse";
import axios from "axios";

function CollapseAccommodation() {
  const [myjsonData, setMyJsonData] = useState("");

  useEffect(() => {
    axios.get("./accommodations.json").then((res) => {
      setMyJsonData(
        res.data.find(
          (item) =>
            item.id === new URL(document.location).searchParams.get("id")
        )
      );
    });
  }, []);

  return (
    <section className='collapse'>
      <div className='collapse__Accommodation'>
        <div className='collapse__Accommodation_content'>
          <Collapse
            title={"Description"}
            description={myjsonData.description}
          />
        </div>
        <div className='collapse__Accommodation_content collapse__Accommodation_equipment'>
          <Collapse
            title={"Équipements"}
            equipmentList={myjsonData.equipments}
          />
        </div>
      </div>
    </section>
  );
}

export default CollapseAccommodation;
