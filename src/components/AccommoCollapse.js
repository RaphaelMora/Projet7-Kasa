import React, { useEffect, useState } from "react";
import axios from "axios";

const AccommoCollapse = (a, b) => {
  const [myJsonData, setMyJsonData] = useState();
  const [stateA, setStateA] = useState(false);
  const [stateB, setStateB] = useState(false);

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

  const equipments = myJsonData?.equipments.map((item) => <li>{item}</li>);

  const displayA = () => {
    if (stateA === a) {
      return setStateA();
    }

    setStateA(a);
  };
  const displayB = () => {
    if (stateB === b) {
      return setStateB();
    }

    setStateB(b);
  };
  return (
    <section className="collapse__Accommodation">
      <div className="collapse__container__Accommodation">
        <div className="collapse__container__grid">
          <div className="collapse__map__Accommodation">
            <div className="collapse__content__Accommodation">
              <p className="collapse__title__Accommodation">Description</p>
              {!stateA ? (
                <i
                  class="fa-solid fa-chevron-up"
                  onClick={() => displayA(true)}
                ></i>
              ) : (
                <i
                  class="fa-solid fa-chevron-down"
                  onClick={() => displayA(false)}
                ></i>
              )}
            </div>
            <div>
              {stateA && (
                <p className="collapse__description__Accommodation">
                  {myJsonData?.description}
                </p>
              )}
            </div>

            <div className=" collapse__content__equipments">
              <p className="collapse__title__Accommodation">Équipements</p>
              {!stateB ? (
                <i
                  class="fa-solid fa-chevron-up"
                  onClick={() => displayB(true)}
                ></i>
              ) : (
                <i
                  class="fa-solid fa-chevron-down"
                  onClick={() => displayB(false)}
                ></i>
              )}
            </div>

            <div className=" collapse__description__equipments">
              <ul>{stateB && <li>{equipments}</li>}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommoCollapse;
