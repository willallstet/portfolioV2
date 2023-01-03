import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import "./design.css"
const Layout = () => {
  return (
    <>
      <div className="not-footer">
        <Navbar />
        <Outlet />
      </div>
      <div className="footer" id="footer">
        Website designed + coded by me using Javascript, React, and HTML.
      </div>
    </>
  );
};

export default Layout;
