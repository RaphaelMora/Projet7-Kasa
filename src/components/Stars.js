import React, { useEffect, useState } from "react";
import axios from "axios";

const Stars = () => {
  const [myJson, setMyJson] = useState();
  const maxNumberOfStars = [...Array(5).keys()];

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

  if (!myJson) return;

  const numberOfStar = myJson.rating;

  return (
    <div className='stars__container'>
      {maxNumberOfStars.map((index) => {
        if (index <= numberOfStar - 1) {
          return (
            <i
              key={index}
              className='fas fa-star fa-star-red'></i>
          );
        } else
          return (
            <i
              key={index}
              className='fas fa-star fa-star-grey'></i>
          );
      })}
    </div>
  );
};

export default Stars;
