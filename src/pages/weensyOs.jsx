import React from "react";
import "./design.css";

function Soundtable() {
  return (
    <body>
      <div className="title">WeensyOS</div>
      <div>
        For my{" "}
        <a
          href="http://cs.brown.edu/courses/csci0300/2022/"
          target="_blank"
          rel="noreferrer"
        >
          computer systems class
        </a>
        , I implemented kernel isolation, process isolation, virtual page
        allocation, overlapping virtual address spaces, forking, shared memory,
        and the process exiting function for a basic operating system called
        WeensyOS. The entirety of the project was written in C++.
      </div>
      <br />
      <img src="https://i.imgur.com/i1SLhtd.gif" className="mediumImg"></img>
      <div className="footer2">credit to brown cs 300, spring 2022, </div>
      <a
        href="https://cs.brown.edu/courses/csci0300/2022/assign/projects/project4.html#Project-4-WeensyOS"
        target="_blank"
        rel="noreferrer"
      >
        assignment 4
      </a>
    </body>
  );
}

export default Soundtable;
