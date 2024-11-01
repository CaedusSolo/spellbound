import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="content-container authLayout">
      <nav className="navbar bg-black">
        <NavLink to="login" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} >Log In</NavLink>
        <NavLink to="create-account" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Create Account</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
