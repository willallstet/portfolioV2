import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <nav>
        <a className="navLink" href="/portfolioV2/projects">
          work,
        </a>{" "}
        <a className="navLink" href="/portfolioV2/writing">
          writing,
        </a>{" "}
        <a className="navLink" href="/portfolioV2/resume">
          resume,
        </a>{" "}
        &{" "}
        <a className="navLink" href="/portfolioV2/contact">
          contact
        </a>
      </nav>
      <div className="navBar"></div>
      <a className="myName" href="/portfolioV2">
        Will Allstetter
      </a>
    </header>
  );
}

export default Navbar;
