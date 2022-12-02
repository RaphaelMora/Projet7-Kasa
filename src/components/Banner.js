import React from "react";
import bannerHome from "../assets/img/banner_home_mobile.jpg";
import bannerAboutDesktop from "../assets/img/banner_about_desktop.jpg";
import bannerAbout from "../assets/img/banner_about_mobile.jpg";
import bannerHomeDesktop from "../assets/img/banner_home_desktop.jpg";

const Banner = ({ home, about }) => {
  return (
    <>
      {home && (
        <div className="banner__container">
          <div className="banner__filter">
            <picture>
              <source
                className="desktop__banner__img"
                srcset={bannerHomeDesktop}
                media="(min-width:768px)"
              />
              <img className="banner__img" src={bannerHome} alt="mountain" />
            </picture>
            <p className="banner__p">Chez vous, partout et ailleurs</p>
          </div>
        </div>
      )}
      {about && (
        <div className="banner__container__about">
          <div className="banner__filter__about">
            <picture>
              <source
                className="desktop__banner__img"
                srcset={bannerAboutDesktop}
                media="(min-width:768px)"
              />
              <img className="banner__img" src={bannerAbout} alt="mountain" />
            </picture>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
