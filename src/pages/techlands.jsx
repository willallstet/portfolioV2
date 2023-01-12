import React from "react";
import "./design.css";

function Techlands() {
  return (
    <body>
      <div className="title">
        Current Research/<i>The Map Is Not The Territory</i>
      </div>
      Right now, I&apos;m working on a research project with{" "}
      <a href="https://naturelab.risd.edu/" target="_blank" rel="noreferrer">
        RISD&apos;s Nature Lab
      </a>{" "}
      and the graduate department of{" "}
      <a href="https://dm.risd.edu/" target="_blank" rel="noreferrer">
        Digital + Media Studies
      </a>{" "}
      exploring memory, myth, cartography, and note-taking. Still very much in
      progress, reach out if you&apos;d like to know more or have any resources
      I might find interesting. Attached is an creative/research essay I wrote
      while a visiting artists at the{" "}
      <a href="http://nbnerr.org/" target="_blank" rel="noreferrer">
        Narragansett Bay Research Reserve
      </a>
      .<br></br>
      <br></br>
      <div className="flex">
        <iframe
          src="https://drive.google.com/file/d/1N7V8yYidbCrqC4Tx7FHkZWIryJ0NwrKo/preview"
          width="90%"
          allow="autoplay"
          className="pdf"
        ></iframe>
      </div>
    </body>
  );
}

export default Techlands;
