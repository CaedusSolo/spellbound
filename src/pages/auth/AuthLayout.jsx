import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useAuth } from "../../AuthProvider";

function AuthLayout() {
  const { authState } = useAuth();
  return (
    <div className="content-container authLayout">
      <nav className="navbar bg-black">
        {authState.isAuthenticated ? (
          <NavLink
            to="logout"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Log Out
          </NavLink>
        ) : (
          <NavLink
            to="login"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Log In
          </NavLink>
        )}
        <NavLink
          to="create-account"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Create Account
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
