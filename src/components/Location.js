import React, { useEffect, useState } from "react";
import axios from "axios";

const Location = () => {
  const [myJson, setMyJson] = useState();

  useEffect(() => {
    axios.get("./accommodations.json").then((res) => {
      setMyJson(
        res.data.find(
          (item) =>
            item.id === new URL(document.location).searchParams.get("id")
        )
      );
    });
  }, []);

  return (
    <div>
      <div className="location__Container">
        <p className="location__p">{myJson?.location}</p>
      </div>
    </div>
  );
};

export default Location;
