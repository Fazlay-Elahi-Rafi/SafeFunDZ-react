import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/00-Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Layout() {
  const menuClassName = location.pathname === "/home-2" ? "hero__banner" : "";

  return (
    <>
      <div className={menuClassName}>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
