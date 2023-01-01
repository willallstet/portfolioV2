import React from "react";

function Writing() {
  return (
    <body className="writing">
      <div className="left-half">
        I&apos;ve publshed&nbsp;
        <a href="http://www.theindy.org/" target="_blank" rel="noreferrer">
          these articles
        </a>{" "}
        in <i>The College Hill Independent</i>, worked as a copywriter for{" "}
        <a href="https://www.pipsrewards.com/" target="_blank" rel="noreferrer">
          PIPs
        </a>
        , and won{" "}
        <a
          href="https://brownmotionpictures.org/"
          target="_blank"
          rel="noreferrer"
        >
          Brown Motion Pictures
        </a>
        &apos; screenwriting competition. <br />
        <br />
        Please email me (
        <a
          href="mailto:william_allstetter@brown.edu"
          target="_blank"
          rel="noreferrer"
        >
          william_allstetter@brown.edu
        </a>
        ) if you&apos;d like other examples of my academic, professional, or
        fictional pieces.
      </div>
      <div className="contactPhoto">
        {" "}
        <img src="https://i.imgur.com/DDQ7Gc3.png"></img>
      </div>
    </body>
  )
}

export default Writing;
