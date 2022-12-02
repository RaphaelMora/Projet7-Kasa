import React from "react";
import { NavLink } from "react-router-dom";

const navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
          end
        >
          <li className="home">Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="about">À propos</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default navigation;
