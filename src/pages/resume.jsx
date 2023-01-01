import React from "react";

function Resume() {
  return (
    <div className="resume">
      <iframe
        src="https://drive.google.com/file/d/13x-YbJ86qoIiusheq2HCGWbFaofdPpZF/preview"
        width="90%"
        allow="autoplay"
        className="pdf"
      ></iframe>
      <br /> download a copy{" "}
      <a
        href="https://drive.google.com/file/d/13x-YbJ86qoIiusheq2HCGWbFaofdPpZF/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        here (this is a placeholder for my real resume)
      </a>
    </div>
  );
}

export default Resume;
