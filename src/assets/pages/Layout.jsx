import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/00-Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Layout() {
  let menuClassName = "";

  if (window.location.pathname === "/home-2") {
    menuClassName = "hero__banner";
  } else {
    menuClassName = "";
  }
  
  return (
    <>
      <div className={`${menuClassName}`}>
        <Navbar />

        <Outlet />
      </div>
      <Footer />
    </>
  );
}
