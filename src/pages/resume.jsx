import React from "react";

function Resume() {
  return (
    <div className="resume">
      <iframe
        src="https://drive.google.com/file/d/1Rv0LKZE6Xzu0kl9rS23jS7sKN_n60C_2/preview"
        width="90%"
        allow="autoplay"
        className="pdf"
      ></iframe>
      <br /> download a copy{" "}
      <a
        href="https://drive.google.com/file/d/1Rv0LKZE6Xzu0kl9rS23jS7sKN_n60C_2/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        here
      </a>
    </div>
  )
}

export default Resume;
