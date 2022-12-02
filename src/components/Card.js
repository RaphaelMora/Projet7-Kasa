import React from "react";
import { Link } from "react-router-dom";
import accommodations from "../datas/accommodations.json";

const Card = () => {
  return (
    <section className="card__container">
      {accommodations.map((accommodation) => {
        return (
          <div className="accommodation__container" key={accommodation.id}>
            <Link to={`/appartement?id=${accommodation.id}`}>
              <img
                className="accommodation__img"
                src={accommodation.cover}
                alt="Aperçu de l'appartement"
              />
              <div className="accommodation__gradient">
                <p className="accommodation__title">{accommodation.title}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default Card;
