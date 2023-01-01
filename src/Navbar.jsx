import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <header>
      <nav>
        <a className="navLink" href="/final/projects">
          projects,
        </a>{" "}
        <a className="navLink" href="/final/writing">
          writing,
        </a>{" "}
        <a className="navLink" href="/final/resume">
          resume,
        </a>{" "}
        &{" "}
        <a className="navLink" href="/final/contact">
          contact
        </a>
      </nav>
      <div className="navBar"></div>
      <a className="myName" href="/final">
        Will Allstetter
      </a>
    </header>
  )
}

export default Navbar;