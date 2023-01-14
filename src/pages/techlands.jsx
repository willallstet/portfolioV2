import React from "react";
import "./design.css";

function Techlands() {
  return (
    <body>
      <div className="flex">
      <div className="title">
        Current Research/<i>The Map Is Not The Territory</i>
      </div>
      <div className="left-text-big-text">
      Right now, I&apos;m working on a research project with{" "}
      <a href="https://naturelab.risd.edu/" target="_blank" rel="noreferrer">
        RISD&apos;s Nature Lab
      </a>{" "}
      and the graduate department of{" "}
      <a href="https://dm.risd.edu/" target="_blank" rel="noreferrer">
        Digital + Media Studies
      </a>{" "}
      that explores memory, myth, cartography, and note-taking. The project is still a work in progress, 
      but please reach out if you&apos;d like to know more or have any related resources. Attached is an
       creative/research essay I wrote when I was a visiting artist at the{" "}
      <a href="http://nbnerr.org/" target="_blank" rel="noreferrer">
        Narragansett Bay Research Reserve
      </a>
      .<br></br>
      <br></br>
      </div>
      <img src="https://i.imgur.com/HXab1SF.jpg" className="smallimg"/>
      </div>
        <iframe
          src="https://drive.google.com/file/d/1N7V8yYidbCrqC4Tx7FHkZWIryJ0NwrKo/preview"
          width="100%"
          allow="autoplay"
          className="pdf"
        ></iframe>
    </body>
  );
}

export default Techlands;
