import React from "react";
import "./design.css";

function Cyanobacteria() {
  return (
    <body>
      <div className="title">Cyanobacteria Sonificaiton</div>
      <div className="disc">
        Working with a team from the University of Colorado&amp;s{" "}
        <a href="https://www.colorado.edu/cinemastudies/">
          Department of Moving Pictures
        </a>{" "}
        and{" "}
        <a
          href="https://www.colorado.edu/lab/cameron/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          The Cameron Lab
        </a>
        , I wrote a program that uses{" "}
        <a href="https://opencv.org/" target="_blank" rel="noreferrer">
          OpenCV
        </a>{" "}
        and{" "}
        <a
          href="https://midiutil.readthedocs.io/en/1.2.1/"
          target="_blank"
          rel="noreferrer"
        >
          MIDIUtil
        </a>{" "}
        to create a MIDI composition from data. It is a Python algorithm that
        intakes csv data and video to sonify Cyanobacteria cells&apos; growth.
        It does so by mapping different heuristics (change in cell size, cell
        growth rate, video movement, etc.) to different properties such as
        arpeggiator rate or the triggering of a kick drum. The output, in MIDI
        format, is currently being used as a soundtrack in the production of a
        documentary about the bacteria. Selections of my work are currently on
        display at the{" "}
        <a href="https://www.dmns.org/" target="_blank" rel="noreferrer">
          Denver Museum of Nature and Science
        </a>
        .
      </div>
      <div className="resume">
        <iframe
          src="https://player.vimeo.com/video/659179487?h=f514f6d975&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          width="90%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="cyanobacteria_sonification_example_AdobeCreativeCloudExpress.mp4"
        ></iframe>
      </div>
    </body>
  );
}

export default Cyanobacteria;
