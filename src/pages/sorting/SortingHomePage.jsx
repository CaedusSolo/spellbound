import React from "react";
import { Link } from "react-router-dom";
import HogwartsLogo from "../../assets/hogwartsLogo.svg";

function SortingHomePage() {
  return (
    <div className="content-container">
      <h1 className="text-center">Discover Your House!</h1>
      <img
        src={HogwartsLogo}
        alt="Hogwarts Logo"
        className="sorting--hogwartsLogo d-block mx-auto"
      />
      <button className="btn btn-primary text-center">
        <Link className="link-light text-decoration-none" to="quiz" >Take the Sorting Quiz</Link>
      </button>
    </div>
  );
}

export default SortingHomePage;
