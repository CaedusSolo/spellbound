import React from "react";
import GryffindorCrest from "../../assets/GryffindorCrest.png";
import HufflepuffCrest from "../../assets/HufflepuffCrest.png"
import SlytherinCrest from "../../assets/SlytherinCrest.png"
import RavenclawCrest from "../../assets/RavenclawCrest.png"

function ProfileHomePage() {
  const { house, username } = JSON.parse(localStorage.getItem("userInfo"));

  const colorScheme = {
    Gryffindor: {
      backgroundColor: "red"
    },
    Hufflepuff: {
      backgroundColor: "brown",
    },
    Slytherin: {
      backgroundColor: "green",
    },
    Ravenclaw: {
      backgroundColor: "blue",
    },
  };
  const houseCrestMap = {
    Gryffindor: GryffindorCrest,
    Hufflepuff: HufflepuffCrest,
    Slytherin: SlytherinCrest,
    Ravenclaw: RavenclawCrest
  }

  return (
    <div className="content-container my-auto" style={colorScheme[house]}>
      <h2 className="text-center">Welcome, {username}! </h2>
      <div className="icons d-flex align-items-center justify-content-center">
        <div className="house d-block mx-auto">
          <img
            src={houseCrestMap[house]}
            alt={`${house} Crest Logo`}
            className="profile--houseCrest d-block mx-auto mt-3"
          />
          <p className="text-center">{house}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileHomePage;
