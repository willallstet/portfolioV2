import React from "react";
import "./design.css";

function Cyanobacteria() {
  return (
    <body className="flex-noJust">
      <div className="title">Cyanobacteria Sonificaiton</div>
      <div className="flex">
        <div className="left-half-noDash">
          <div className="disc">
            Working with a team from the University of Colorado's{" "}
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
            to create a MIDI composition from data. It is a Python algorithm
            that intakes CSV data and video to sonify Cyanobacteria cells&apos;
            growth. It does so by mapping different heuristics (change in cell
            size, cell growth rate, video movement, etc.) to different
            properties, such as arpeggiator rate or the triggering of a kick
            drum.
          </div>
        </div>{" "}
        <div className="vimeoPicContainer">
          <iframe
            className="vimeoTall"
            src="https://player.vimeo.com/video/659179487?h=f514f6d975&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            title="cyanobacteria_sonification_example_AdobeCreativeCloudExpress.mp4"
          ></iframe>
        </div>
      </div>
      <div className="flex2">
        <img
          className="thirtyvwimg"
          src="https://www.colorado.edu/project/environmental-futures/sites/default/files/styles/large_square_thumbnail/public/gallery/screen_shot_2022-04-13_at_4.40.56_pm.png?itok=UjG62-3h"
        />
        <div className="left-half-noDash">
          <div className="disc">
            The output, in MIDI format, is currently being used as a soundtrack
            in the production of a documentary about the bacteria. This project,
            as a whole, attempted to understand the poetic and scientific
            similarities between man-made climate change and the cyanobacteria
            life cycle. <br />
            <br />
            Selections of my work are currently on display at the{" "}
            <a href="https://www.dmns.org/" target="_blank" rel="noreferrer">
              Denver Museum of Nature and Science
            </a>
            .
          </div>
        </div>
      </div>
    </body>
  );
}

export default Cyanobacteria;
