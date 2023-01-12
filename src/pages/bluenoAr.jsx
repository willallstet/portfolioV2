import React from "react";
import "./design.css";

function BluenoAr() {
  return (
    <body className="centerElements">
      <div className="left-half-noDash">
        <div className="title">Blueno AR</div>
        <div>
          To advertise the Ivy Film Festival&apos;s Virtual Reality Arcade, I
          made a website that uses{" "}
          <a
            href="https://ar-js-org.github.io/AR.js-Docs/"
            target="_blank"
            rel="noreferrer"
          >
            AR.js
          </a>{" "}
          to display a Blender model (which I also made) of an{" "}
          <a
            href="https://www.brown.edu/news/2020-09-03/blueno"
            target="_blank"
            rel="noreferrer"
          >
            iconic statue at Brown
          </a>
          . The banner at the bottom of the page links to a sign-up sheet, where
          you can reserve a spot to view the{" "}
          <a
            href="https://www.ivyfilmfestival.org/new-media"
            target="_blank"
            rel="noreferrer"
          >
            official New Media selection
          </a>{" "}
          my team and I chose for the 2022 festival. <br />
          <br />
          By attaching an ambiguous QR code and call to action on the posters
          scattered around campus, viewers are drawn into the world of the
          festival. My goal was to create a promotional experience that felt
          like discovery and mimicked IFF's takeover of campus during festival
          week.
        </div>
      </div>
      <div className="mePhoto">
        <img
          className="mediumImgPad"
          src="https://media4.giphy.com/media/YUu0xmmRmePOyu8uIh/giphy.gif?cid=790b76114918966cc373c0d38ecd43826ed176ce4cf224d3&rid=giphy.gif&ct=g"
        ></img>
      </div>
    </body>
  );
}

export default BluenoAr;
