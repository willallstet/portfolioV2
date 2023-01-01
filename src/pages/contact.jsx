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
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            by{" "}
            <a href="https://gmail.com" target="_blank" rel="noreferrer">
              email
            </a>
          </li>
          <li>
            through snail mail at 69 Brown St. Box #####, Providence, RI 02912
          </li>
          <li>
            or check out what I&apos;m saving on{" "}
            <a href="https://www.are.na/" target="_blank" rel="noreferrer">
              are.na
            </a>
          </li>
        </ul>
      </div>
      <div className="contactPhoto">
        {" "}
        <img src="https://media.tegna-media.com/assets/WBNS/images/cc4fe700-a063-4275-8d16-c00981f0c8cb/cc4fe700-a063-4275-8d16-c00981f0c8cb_1920x1080.jpg"></img>
      </div>
    </body>
  );
}

export default Contact;
