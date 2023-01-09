import React from "react";
import "./design.css";

function Soundtable() {
  return (
    <body className="flex">
      <div className="title">Soundtable</div>
      <div className="left-text">
        For an end-of-semester project, I built an Ableton controller. This
        project grew out of a desire to both simplify and introduce an aspect of
        play to sound synthesis. Modern digital VST synthesizers rely on
        extensive knowledge of sine wave and wavetable properties, creating a
        high barrier to entry into the field. As opposed to most software
        synthesizers, the Soundtable was designed to allow
        anyone&#8212;including those without experience&#8212;to experiment and,
        most importantly, play.<br></br>
        <br></br> The design is intentionally organic, placing it in direct
        contrast with the digital style popular in the field. The meanings of
        the controls are intentionally obscure on the first interaction. This is
        to encourage exploration and discovery rather than the achievement of
        specific sonic goals. For those looking to have granular, precise
        control over their synthesis, there is already a variety of technology.
        Instead, the Soundtable fulfills a different need: to have a fun, casual
        introduction to sound synthesis.
        <br />
        <br />
        Behind the scenes,{" "}
        <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer">
          Arduinos
        </a>{" "}
        send capacitive touch data through a serial port to a Python program,
        which controls the parameters of{" "}
        <a href="https://vital.audio/" target="_blank" rel="noreferrer">
          Vital Basic
        </a>
        .
      </div>
      <iframe
        src="https://player.vimeo.com/video/724583639?h=126fcc5a06&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        title="soundtable demo"
        className="vimeo"
      ></iframe>
      <div className="seperator"></div>
      <div className="subhead-wide">Build Process</div>
      <div className="left-text-small">
        Wanting to create a <b>tactile</b> and <b>touchable</b> interface
        without a digital aesthetic, I decided to utilize capacitive touch
        sensors and copper tape. My initial design consisted of overlapping
        sections of tape, however, the overlapping signals grounded each other
        and brought the outputs to zero.
      </div>
      <img className="smallimg" src="https://i.imgur.com/pGaSVib.jpg" />
      <img className="smallimg" src="https://i.imgur.com/Uyi6DF1.jpg" />
      <img className="smallimg" src="https://i.imgur.com/W2rC6hg.jpg" />
      <div className="left-text-big-text">
        As a result, I created an alternative design that, in the end, better
        suited the needs of the project. This iteration gestured at the
        grid-like aesthetic I was intentionally subverting while keeping the
        simplicity needed.
      </div>
      <div className="seperator"></div>
      <div className="left-text-big-text">
        With the circuitry working, I wrote a program that received serial data
        from the Arduinos and utilized the{" "}
        <a
          href="https://github.com/ideoforms/pylive"
          target="_blank"
          rel="noreferrer"
        >
          pyLive
        </a>{" "}
        library to control Ableton Live. You can find the code repository{" "}
        <a
          href="https://github.com/willallstet/soundtable"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </div>
      <img className="mediumImg" src="https://i.imgur.com/srWmGfm.png" />
      <div className="seperator"></div>
      <img className="smallimg" src="https://i.imgur.com/VT8PnMR.jpg" />
      <div className="left-text-big-text">
        Then, when it came to creating the casing for the technology, it was
        important for the project's goals to create a natural-looking piece of
        furniture with organic materials.<br></br>
        <br />
        In the end, the object accomplished its design goals. As a mixture of a
        UX and art project, the somewhat mystified goals/controls were important
        to its thesis, making it hard to judge its success. If I were to make
        another iteration, I would focus on creating a more organic shape to
        further signal its ideological departure from a traditional
        synthesizer/digital music ethos.
      </div>
    </body>
  );
}

export default Soundtable;
