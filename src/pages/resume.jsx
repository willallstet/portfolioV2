import React from "react";

function Resume() {
  return (
    <div className="resume">
      <iframe
        src="https://drive.google.com/file/d/12xjdTJsgjJ9araiEcEehAtUVt9fyo8_G/preview"
        width="90%"
        allow="autoplay"
        className="pdf"
      ></iframe>
      <br /> download a copy{" "}
      <a
        href="https://drive.google.com/file/d/12xjdTJsgjJ9araiEcEehAtUVt9fyo8_G/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        here
      </a>
    </div>
  );
}

export default Resume;
