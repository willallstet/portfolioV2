import React from "react";
import "./design.css";

function Soundtable() {
  return (
    <body>
      <body className="flex-noJust">
      <div className="title">GitLab Prune</div>
      <div className="flex">
        <div className="left-half-noDash">
          <div className="disc">
          While interning at <a href="https://www.engati.com/" target="_blank" rel="noreferrer">Engati</a>, I noticed that many of their GitLab repositories were filled with 
          long ignored, unused branches. As such, I decided to write a Python script that systematically
          cleaned those repositories, deleting branches that had not been modified past a certain date. 
          To do so I used the{" "}<a href="https://python-gitlab.readthedocs.io/en/stable/index.html" target="_blank" rel="noreferrer">Python-GitLab</a>
         {" "}and <a href="https://gitpython.readthedocs.io/en/stable/" target="_blank" rel="noreferrer">GitPython</a>
         {" "}libraries to create a simple command line program that is still used to help maintain the company's repositories.
          </div>
        </div>{" "}
        <img src="https://i.imgur.com/tOG1dJt.gif" className="thirtyvwimg"></img>
      </div>
    </body>
    </body>
  );
}

export default Soundtable;
