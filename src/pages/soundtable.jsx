import React from "react";
import "./design.css";

function Soundtable() {
  return (
    <body>
      <div className="title">Soundtable</div>
      <div>
        For my end of semester Design Studio project, I built an Ableton
        controller. This project grew out of a desire to both simplify and
        introduce an aspect of play to sound synthesis. Modern digital sound
        synthesis relies on extensive knowledge of sine wave and wavetable
        properties, creating a high barrier to entry into the field. As opposed
        to most software synthesizers, the Soundtable was designed to allow
        anyone&#8212;including those without experience&#8212;to experiment and,
        most importantly, play. The design is intentionally organic, placing it
        in direct contrast with the digital style popular in the field. The
        meanings of the controls are intentionally obscure on first interaction.
        This is in an effort to encourage exploration and discovery rather than
        the achievement of specific sonic goals. For those looking to have
        granular, percise control over their synthesis, there is already a
        variety of technology. Instead, the Soundtable fufills a different need:
        to have a fun, casual introduction to sound synthesis.
        <br />
        <br />
        Behind the scenes,{" "}
        <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer">
          Arduinos
        </a>{" "}
        send capacitive touch data through a serial port to a Python program,
        which controls parameters of{" "}
        <a href="https://vital.audio/" target="_blank" rel="noreferrer">
          Vital Basic
        </a>
        .
      </div>
      <div className="bricks">
        <div className="brick">
          <div className="subhead">Demo</div>
          <iframe
            src="https://player.vimeo.com/video/724583639?h=126fcc5a06&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="soundtable demo"
            className="vimeo"
          ></iframe>
        </div>
        <div className="brick">
          <div className="subhead">Build Process</div>
          <div className="disc">
            Wanting to create a tactile, touchable interface without a digital
            asthetic, I decided on utilizng capative touch sensors and copper
            tape. My initial design consisted of overlapping sections of tape,
            however I got lots of interference in the signal, as overlapping
            signals would ground eachother and bring the outputs to zero.
          </div>
          <img className="smallimg" src="https://i.imgur.com/pGaSVib.jpg" />
          <img className="smallimg" src="https://i.imgur.com/Uyi6DF1.jpg" />
          <div className="disc">
            As a result, I created an altertaitve design that, in the end,
            better suited the needs of the project. This iteration gestured at
            the grid like asthetic I was intentionally subverting while keeping
            the simplcity needed.
          </div>
          <img className="smallimg" src="https://i.imgur.com/W2rC6hg.jpg" />
          <div className="disc">
            Once the circutry was working, I wrote a program that recieved
            serial data from the Arduinos and utilized the{" "}
            <a
              href="https://github.com/ideoforms/pylive"
              target="_blank"
              rel="noreferrer"
            >
              pyLive
            </a>{" "}
            library to control Ableton Live.
          </div>
          <img src="https://i.imgur.com/srWmGfm.png" />
          <div className="disc">
            Then, when it came to creating the casing for the technology, it was
            important for the project's goals to create a natrual looking piece
            of furniture with organic materials.
          </div>
          <img className="mediumImg" src="https://i.imgur.com/VT8PnMR.jpg" />
          <br></br>
          <div className="disc">
            If I were to make another iteration, I woud focus on creating an
            more organic shape to further signal its ideological departure from
            a tradutional synthesizer/digital music ethos.
          </div>
        </div>
      </div>
    </body>
  );
}

export default Soundtable;
