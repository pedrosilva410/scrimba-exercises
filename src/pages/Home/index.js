import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./styles.css";

const Home = () => {
  let location = useLocation();
  console.log(typeof location.pathname);

  return (
    <main>
      <h1>srimba classes</h1>
      <ul className="home__main">
      <li className="lihtmnl">
        <NavLink
          to="/HTMLExercises"
          className='litext'
        >
          HTML
        </NavLink>
      </li>
      <li className="licss">
        <NavLink
          to="/CSSExercises"
          className='litext'
        >
          CSS
        </NavLink>
      </li>
      <li className="lijs">
        <NavLink
          to="/JSExercises"
          className='litext'
        >
          JS
        </NavLink>
      </li>
    </ul>
    </main>
  );
};

export default Home;
