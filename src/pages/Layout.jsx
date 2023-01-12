import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import "./design.css";

const Layout = () => {
  return (
    <>
      <div className="not-footer">
        <Navbar />
        <div className="centerHome" id="content">
          <Outlet />
        </div>
      </div>
      <div className="footer" id="footer">
        Website designed + coded by me using Javascript, React, and HTML.
      </div>
    </>
  );
};

//document.getElementById("footer").style.paddingTop =(distance / 2).toString + "px";

export default Layout;
