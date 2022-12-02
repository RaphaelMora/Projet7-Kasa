import React from "react";

const e404 = () => {
  return (
    <section className="error__container">
      <p className="error__404">404</p>
      <p className="error__oups">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <a href="/" className="error__redirect">
        Retourner sur la page d’accueil
      </a>
    </section>
  );
};

export default e404;
