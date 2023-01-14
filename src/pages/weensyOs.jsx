import React from "react";
import "./design.css";

function Soundtable() {
  return (
    <body>
      <body className="flex-noJust">
      <div className="title">WeensyOS</div>
      <div className="flex">
        <div className="left-half-noDash">
          <div className="disc">
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
        </div>{" "}
        <img src="https://i.imgur.com/i1SLhtd.gif" className="smallerimg"></img>
      </div>
      <div className="vert-pad"/>
      <div className="vert-pad"/>
      <div className="flex2">
        <pre className="monospace-small">
63         47     38     29     20     11        0<br></br>
+---------+------+------+------+------+-----------+<br></br>
| UNUSED  |  L4  |  L3  |  L2  |  L1  | offset    |<br></br>
+---------+------+------+------+------+-----------+<br></br>
          |9 bits|9 bits|9 bits|9 bits| 12 bits<br></br><br></br>


          <b><i>example of a virtual address in x86-64 architecture</i></b><br></br>
</pre>
        <div className="left-half-noDash">
          <div className="disc">
            Virtual memory allows computer operating systems to run multiple programs safely on the 
            same hardware. Each program is given its own continuous "virtual memory" that is split across the hardware's 
            physical memory. In this way, the computer is able to efficiently fragment work across 
            programs without allowing unsafe access to restricted memory. This ability is built off of a 
            kernel that controls the processes, multiple memory spaces, and many-leveled page tables.
          </div>
        </div>
      </div>
    </body>
      <div className="footer2">credit to brown cs 300, spring 2022, <a
        href="https://cs.brown.edu/courses/csci0300/2022/assign/projects/project4.html#Project-4-WeensyOS"
        target="_blank"
        rel="noreferrer"
      >
        assignment 4
      </a></div>
    </body>
  );
}

export default Soundtable;
