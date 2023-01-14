import React from "react";

function Resume() {
  return (
    <div>
      <div className="resume" hidden={false}>
        <iframe
          src="https://drive.google.com/file/d/1mkvYHwlEISH6MvmtgUCPiomkl8R6Iv2D/preview"
          width="90%"
          allow="autoplay"
          className="pdf"
        ></iframe>
        <br/>
        <br /> download a copy{" "}
        <a
          href="https://drive.google.com/file/d/1mkvYHwlEISH6MvmtgUCPiomkl8R6Iv2D/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        <br/>
        <br/>
      </div>
      <div className="resume" hidden={true}>
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
    </div>
  )
}

export default Resume;
