import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Spellbound's Logo" />
      <div className="linksContainer">
        <Link className="nav-link">Home</Link>
        <Link className="nav-link">Learn</Link>
        <Link className="nav-link">Encyclopedia</Link>
      </div>
    </nav>
  );
}

export default Navbar;
