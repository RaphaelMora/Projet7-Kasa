import React from "react";
import logo from "../assets/img/logo_red_mobile.png";
import logoDesktop from "../assets/img/logo_red_desktop.png";

const Logo = () => {
  return (
    <div className='logo__container'>
      <picture>
        <source
          srcSet={logoDesktop}
          className='desktop__logo__img'
          media='(min-width:769px)'
        />
        <img
          className='logo__img'
          src={logo}
          alt='logo Kasa rouge'
        />
      </picture>
    </div>
  );
};

export default Logo;
