import React, { useEffect, useState } from "react";
import axios from "axios";

const Tags = () => {
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
    <div className="tags__container">
      {myJson?.tags.map((accommodation, index) => {
        return (
          <div className="tags__content" key={index}>
            <span className="tags__content__p">
              <p className="tags__p">{accommodation}</p>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
