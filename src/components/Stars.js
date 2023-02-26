import React, { useEffect, useState } from "react";
import axios from "axios";

const Stars = () => {
  const [myJson, setMyJson] = useState();
  /** We create an array of N number of elements that represent our max stars */
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

  /**
   *
   * Pour :
   * Etoile rouge, qui, représente le nombre d'étoile du raiting (note)
   * Etoile noir, qui, représente le nombre d'étoile maximum
   */

  /** On boucle sur le tableau qui contient le nombre max de stars, donc, on affiche forcément toutes les étoiles (que ce soit en rouge ou en noir)  */
  return (
    <div className="stars__container">
      {maxNumberOfStars.map((index) => {
        /**
         * Si index < (inférieur) ou égale à numberOfStar, on affiche des étoiles rouge
         */
        if (index <= numberOfStar - 1) {
          return <i key={index} className="fas fa-star fa-star-red"></i>;
        }

        /**
         * Si index > (supérieur) à numberOfStar, on affiche des étoiles noir
         */
        if (index > numberOfStar - 1) {
          return <i key={index} className="fas fa-star fa-star-grey"></i>;
        }
      })}
    </div>
  );
};

export default Stars;
