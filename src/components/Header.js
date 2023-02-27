import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const header = () => {
  return (
    <header className='header__container'>
      <Logo />
      <Navigation />
    </header>
  );
};

export default header;
