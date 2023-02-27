import React, { useState } from "react";

function Collapse({ title, description, equipmentList }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className='collapse_article'>
      <div className='collapse_container'>
        <div
          className='collapse_title_chevrons'
          onClick={toggleCollapse}>
          <p className='collapse__title'>{title}</p>
          {isOpen ? (
            <i className='fa-solid fa-chevron-up chevrons'></i>
          ) : (
            <i className='fa-solid fa-chevron-down chevrons'></i>
          )}
        </div>
        {isOpen && (
          <div className='collapse__content'>
            <p className='collapse_p'>{description}</p>
            {equipmentList && (
              <ul className='collapse__equipmentList'>
                {equipmentList.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default Collapse;
