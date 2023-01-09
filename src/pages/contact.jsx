import React from "react";
import "./design.css";

function Contact() {
  return (
    <body className="contact">
      <div className="left-half">
        You can contact me:
        <ul>
          <li>
            on{" "}
            <a
              href="https://www.linkedin.com/in/william-allstetter/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            by{" "}
            <a
              href="mailto:william_allstetter@brown.edu"
              target="_blank"
              rel="noreferrer"
            >
              email
            </a>
          </li>
          <li>
            through snail mail at 69 Brown St. Box #####, Providence, RI 02912
          </li>
          <li>
            or check out what I&apos;m saving on{" "}
            <a
              href="https://www.are.na/will-allstetter"
              target="_blank"
              rel="noreferrer"
            >
              are.na
            </a>
          </li>
        </ul>
      </div>
      <div className="contactPhoto">
        {" "}
        <img src="https://pbs.twimg.com/media/EY7tGKrUMAAToB9?format=jpg&name=large"></img>
      </div>
    </body>
  );
}

export default Contact;
