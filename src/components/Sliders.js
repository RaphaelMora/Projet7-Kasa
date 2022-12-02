import React, { useEffect, useState } from "react";
import axios from "axios";

const Sliders = () => {
  const [myJson, setMyJson] = useState();
  const [myJsonPictures, setMyJsonPictures] = useState(0);

  useEffect(() => {
    /*Penser à changer la destination*/
    axios.get("./accommodations.json").then((res) => {
      setMyJson(
        res.data.find(
          (item) =>
            item.id === new URL(document.location).searchParams.get("id")
        )
      );
    });
  }, []);

  const previous = () => {
    setMyJsonPictures(
      myJsonPictures === 0 ? myJson.pictures.length - 1 : myJson - 1
    );
  };
  const next = () => {
    setMyJsonPictures(
      myJsonPictures === myJson.pictures.length - 1 ? 0 : myJsonPictures + 1
    );
  };

  return (
    <section className="slider__container">
      <div className="slider__content">
        <div>
          <img
            src={myJson?.pictures[myJsonPictures]}
            alt="Aperçu de l'appartement"
          />
          <i
            className="fa-solid chevron__slide fa-chevron-left"
            onClick={previous}
          ></i>
          <i
            className="fa-solid chevron__slide fa-chevron-right"
            onClick={next}
          ></i>
        </div>
      </div>
      <div className="slider__content__p">
        <p className="slider__p">{myJson?.title}</p>
      </div>
    </section>
  );
};

export default Sliders;
