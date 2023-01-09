import React from "react";

function Home() {
  return (
    <div className="centerHome">
      <div className="bricks">
        <div className="left-half">
          <div>
            <div className="title">
              {" "}
              Hi, I'm <i>Will Allstetter</i>
            </div>
          </div>
          I&apos;m a creative technologist & writer pursuing a bachelor&apos;s
          degree in Computer Science & English at{" "}
          <a href="https://www.brown.edu/" target="_blank" rel="noreferrer">
            Brown University
          </a>{" "}
          (and sometimes{" "}
          <a href="https://www.risd.edu/" target="_blank" rel="noreferrer">
            RISD
          </a>
          ). At school, I'm the the New Media Department coordinator for the{" "}
          <a
            href="https://www.ivyfilmfestival.org/"
            target="_blank"
            rel="noreferrer"
          >
            Ivy Film Festival
          </a>{" "}
          and handle Operations and Sustainability for{" "}
          <a
            href="http://betterworldxdesign.com/"
            target="_blank"
            rel="noreferrer"
          >
            Better World by Design
          </a>
          . <br></br>
          <br></br>I'm interested in how nature, exploration, and play can
          contribute to an ethical, critical design practice.
        </div>
        <div className="mePhoto">
          <img
            src="https://i.imgur.com/hTJPLVs.jpg"
            alt="a photo of me (Will Allstetter)"
            className="left-pad"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
