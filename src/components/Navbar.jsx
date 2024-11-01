import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

function Navbar() {
  return (
    <nav className="navbar sticky-top">
      <img src={Logo} alt="Spellbound's Logo" className="navbarLogo" />
      <div className="linksContainer">
        <NavLink
          className={({ isActive }) =>
            isActive ? `nav-link active` : "nav-link"
          }
          to="/"
          end
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? `nav-link active` : "nav-link"
          }
          to="auth/login"
        >
          Login
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `nav-link active` : "nav-link"
          }
          to="sorting"
        >
          Discover Your House
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `nav-link active` : "nav-link"
          }
        >
          Learn
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
