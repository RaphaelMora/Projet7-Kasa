import React, { useEffect, useState } from "react";
import axios from "axios";

const Host = () => {
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
    <div className="host__Container">
      <div className="host">
        <div className="host__content__p">
          <p className="host__p">{myJson?.host.name}</p>
        </div>
        <img src={myJson?.host.picture} alt="portrait du proprietaire" />
      </div>
    </div>
  );
};

export default Host;
