import React, { useState } from "react";

const CollapseList = ({ val }) => {
  const [state, setState] = useState(false);

  return (
    <div className="collapse__map">
      <div className="collapse__content">
        <p key={val.id} className="collapse__title">
          {val.title}
        </p>
        {!state ? (
          <i
            className="fa-solid fa-chevron-up"
            onClick={() => setState(true)}
          ></i>
        ) : (
          <i
            className="fa-solid fa-chevron-down"
            onClick={() => setState(false)}
          ></i>
        )}
      </div>
      {state && (
        <p key={val.id} className="collapse__description">
          {val.description}
        </p>
      )}
    </div>
  );
};

export default CollapseList;
