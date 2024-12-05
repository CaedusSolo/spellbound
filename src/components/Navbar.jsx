import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { AuthContext } from "../AuthProvider";

function Navbar() {
  const { authState, logout } = useContext(AuthContext);
  const navigate = useNavigate()
  function handleLogout() {
    logout()
    navigate("/auth/create-account")    
  }
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

        {authState.isAuthenticated ? (
          <button onClick={handleLogout} className="nav-link btn-link">Log Out</button>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive ? `nav-link active` : "nav-link"
            }
            to="auth/login"
          >
            Login
          </NavLink>
        )}
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
          to="profile"
        >
          Profile
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
