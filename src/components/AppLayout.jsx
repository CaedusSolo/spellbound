import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Navbar />
      <h1>App Component</h1>
      <Footer />
      <Outlet />
    </>
  );
}

export default AppLayout;
