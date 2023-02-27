import React, { useEffect, useState } from "react";
import axios from "axios";

const Sliders = () => {
  const [myJson, setMyJson] = useState();
  const [myJsonPictures, setMyJsonPictures] = useState(0);

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

  const previous = () => {
    setMyJsonPictures(
      myJsonPictures === 0 ? myJson.pictures.length - 1 : myJsonPictures - 1
    );
  };
  const next = () => {
    setMyJsonPictures(
      myJsonPictures === myJson.pictures.length - 1 ? 0 : myJsonPictures + 1
    );
  };

  if (!myJson?.pictures || myJson.pictures.length <= 1) {
    return (
      <section className='slider_container'>
        <div className='slider_content'>
          <div>
            <img
              src={myJson?.pictures}
              alt="Aperçu de l'appartement"
            />
          </div>
        </div>
        <div className='slider_content_p'>
          <p className='slider_p'>{myJson?.title}</p>
        </div>
      </section>
    );
  }

  return (
    <section className='slider_container'>
      <div className='slider_content'>
        <div>
          <div className='slider_image_counter'>
            <img
              src={myJson?.pictures[myJsonPictures]}
              alt="Aperçu de l'appartement"
            />
            <p className='slider_counter'>
              {myJsonPictures + 1}/{myJson.pictures.length}
            </p>
          </div>
          <i
            className='fa-solid chevron_slide fa-chevron-left'
            onClick={previous}></i>
          <i
            className='fa-solid chevron_slide fa-chevron-right'
            onClick={next}></i>
        </div>
        <div className='slider_content_p'>
          <p className='slider_p'>{myJson?.title}</p>
        </div>
      </div>
    </section>
  );
};

export default Sliders;
