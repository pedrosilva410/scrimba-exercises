import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./styles.css";

const Header = () => {
  let location = useLocation();
  console.log(typeof location.pathname);

  return (
    <ul className="nav">
      <li>
        <NavLink
          exact
          className="nav_item"
          activeClassName="nav_item_selected"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="nav_item"
          activeClassName="nav_item_selected"
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className="nav_item"
          activeClassName="nav_item_selected"
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default Header;
