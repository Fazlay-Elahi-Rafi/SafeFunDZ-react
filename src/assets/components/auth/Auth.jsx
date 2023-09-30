import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../00-Navbar/Navbar";

export default function AuthLayout() {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
}
