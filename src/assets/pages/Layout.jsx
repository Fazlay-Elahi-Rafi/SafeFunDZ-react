import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/00-Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Layout() {
  return (
    <>
      <div className="hero__banner">
        <Navbar />

        <Outlet />

      </div>
      <Footer />
    </>
  );
}
