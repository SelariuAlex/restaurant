import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.styles.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        className="navbar__link"
        exact
        activeClassName="navbar__link--active"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="navbar__link"
        exact
        activeClassName="navbar__link--active"
        to="/meniu"
      >
        Meniu
      </NavLink>
      <NavLink
        className="navbar__link"
        exact
        activeClassName="navbar__link--active"
        to="/meniu"
      >
        Reservations
      </NavLink>
      <NavLink
        className="navbar__link"
        exact
        activeClassName="navbar__link--active"
        to="/meniu"
      >
        Contact
      </NavLink>
    </nav>
  );
};
