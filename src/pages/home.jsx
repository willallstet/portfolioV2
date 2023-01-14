import React from "react";

function Home() {
  return (
    <div className="centerHome">
      <div className="bricks">
        <div className="left-half">
          <div>
            <div className="title-alittleSmaller">
              {" "}
              <span className="monospace">
                Hi, I'm Will Allstetter
              </span>
            </div>
          </div>
          <br></br>
          I&apos;m a creative technologist and writer pursuing a bachelor&apos;s
          degree in computer science & English at{" "}
          <a href="https://www.brown.edu/" target="_blank" rel="noreferrer">
            Brown University
          </a>{" "}
          (and sometimes{" "}
          <a href="https://www.risd.edu/" target="_blank" rel="noreferrer">
            RISD
          </a>
          ). At school, I'm the New Media Department coordinator for the{" "}
          <a
            href="https://www.ivyfilmfestival.org/"
            target="_blank"
            rel="noreferrer"
          >
            Ivy Film Festival
          </a>{" "}
          and handle operations and sustainability for{" "}
          <a
            href="http://betterworldxdesign.com/"
            target="_blank"
            rel="noreferrer"
          >
            Better World by Design
          </a>
          .<br></br>
          <br></br>I'm interested in how nature, exploration, and play
          contribute to an ethical, critical design practice. In my freetime, I read and woodwork.
          <br />
          <br />
          <div className="disc-small" hidden={true}>
            I'm currently A/B testing this website that I coded myself against a
            templatized one. If you're open to providing feedback, you can find
            a survey{" "}
            <a
              href="https://forms.gle/vMaXmKgCUYKZWQ3G6"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </div>
        </div>
        <div className="mePhoto">
          <img
            src="https://i.imgur.com/sAuEg27.jpg"
            alt="a photo of me (Will Allstetter)"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
