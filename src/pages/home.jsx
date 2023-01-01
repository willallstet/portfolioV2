import React from "react";

function Home() {
  return (
    <div className="centerHome">
      <div className="bricks">
        <div className="left-half">
          <div>
            <div className="title"> Hi, I'm <i>[name redacted]</i></div>
          </div>
          I&apos;m a software engineer & writer pursuing a bachelor&apos;s
          degree in Computer Science & English at{" "}
          <a href="https://www.brown.edu/" target="_blank" rel="noreferrer">
            Brown University
          </a>{" "}
          (and sometimes{" "}
          <a href="https://www.risd.edu/" target="_blank" rel="noreferrer">
            RISD
          </a>
          ). At school, I work in the New Media Department of the{" "}
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
          .
        </div>
        <div className="mePhoto">
          <img
            src="https://i.insider.com/56d5b238dd089554178b4752?width=1000&format=jpeg&auto=webp"
            alt="a photo of me ([name redacted])"
          />
          <br></br>I'm not allowed to have photos of myself so this will have to
          do for the time being (I'm the dog)
        </div>
      </div>
    </div>
  );
}

export default Home;
