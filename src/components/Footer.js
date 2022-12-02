import React from "react";
import logoFooter from "../assets/img/logo_white_mobile.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <img className="footer__img" src={logoFooter} alt="logo Kasa blanc" />
        <p className="footer__p">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
