import React from "react";
import "./styles.css";
import { NavLink} from "react-router-dom";

const JSExercises = () => {
  return (
    <main>
      <h1>JS Exercises</h1>
      <NavLink
          to="/PassengerCounter"
          className='jsex'
        >
          PC
        </NavLink>
    </main>
  );
};

export default JSExercises;
