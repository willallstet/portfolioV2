import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <header>
      <nav>
      <a className='navLink'href="/projects">projects,</a>{' '}
      <a className='navLink'href="/writing">writing,</a>{' '}
      <a className='navLink' href="/resume">resume,</a>{' '}&{' '}
      <a className='navLink'href="/contact">where to contact me</a>
    </nav>
    <div className='navBar'>
    </div>
    <a className='myName' href="/">[name redacted]</a>
  </header>
  );
}

export default Navbar;